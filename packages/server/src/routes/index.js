const express = require('express');
const router = express.Router();

const userRouter = require('./users/users');
const pokemonDBRouter = require('./pokemonDB/index');
const authRouter = require('./auth');

router.use('/users', userRouter);
router.use('/pokemonDB', pokemonDBRouter);
router.use('/auth', authRouter);

module.exports = router;
