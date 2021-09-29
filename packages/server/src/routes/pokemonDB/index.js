const berryRouter = require('./berry');
const pokemonRouter = require('./pokemon');

const express = require('express');
const router = express.Router();

router.use('/pokemon', pokemonRouter);
router.use('/berry', berryRouter);

module.exports = router;
