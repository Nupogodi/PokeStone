const express = require('express');
const { User } = require('../../models/index');
const chalk = require('chalk');

const router = express.Router();

// @GET /api/users - Public (retrieve a list of all users)
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({});

    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /api/users/:id - Public (retrieve a particular player)
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ msg: 'User does not exist.' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// @PUT /api/users:id - Public (update user)
router.put('/:id', async (req, res, next) => {
  // console.log(chalk.red(req));
  try {
    const { username, score, pokemonList } = req.body;

    const update = { score, pokemonList };

    let user = await User.findById(req.params.id);
    // console.log(chalk.red(req));

    if (user) {
      user = await User.findByIdAndUpdate(req.params.id, update, { new: true });

      res.status(200).json({
        msg: 'User has been successfully updated.',
        user: user.toJSON(),
      });
    } else {
      res.status(400).json({ msg: 'User not found.' });
    }
  } catch (error) {
    console.log(chalk.red(req.params));
    console.error(error);
    next(error);
  }
});

module.exports = router;
