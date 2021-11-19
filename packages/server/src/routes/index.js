const express = require('express');
const router = express.Router();

const userRouter = require('./users/users');
const pokemonDBRouter = require('./pokemonDB/index');

router.use('/users', userRouter);
router.use('/pokemonDB', pokemonDBRouter);

module.exports = router;
