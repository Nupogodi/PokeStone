const express = require('express');
const { User } = require('../models/index');
const chalk = require('chalk');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// @POST /api/auth/signup - Public (post a new user)
router.post('/signup', async (req, res, next) => {
  const { username, password, confirmPassword } = req.body;

  try {
    let user = await User.findOne({ username });

    if (user) {
      return res.status(422).json({ error: 'User already exists.' });
    }

    if (!password || !username) {
      return res.status(422).json({ error: 'please add all the fields.' });
    }

    if (password.split('').length < 8) {
      return res
        .status(400)
        .json({ error: 'The password must be between 8 and 15 characters.' });
    }

    const password_hash = await bcrypt.hash(password, 12);

    console.log(password_hash);

    user = new User({
      username,
      password_hash,
    });

    await user.save();

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// @POST /api/auth/signin - Public (Sign in)
router.post('/signin', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(422).json({ error: 'Missing username or password.' });
    }

    const user = await User.findOne({ username: username });
    const passwordCorrect =
      user === null
        ? false
        : await bcrypt.compare(password, user.password_hash);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: 'Invalid username or password.',
      });
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(userForToken, process.env.JWT_SECRET);
    res.status(200).send({
      token,
      username,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
