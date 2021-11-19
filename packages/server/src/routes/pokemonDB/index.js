const pokemonRouter = require('./pokemon/pokemon');
const abilityRouter = require('./pokemon/ability');
const evolutionChainRouter = require('./pokemon/evolutionChain');
const speciesRouter = require('./pokemon/species');
const typeRouter = require('./pokemon/type');
const growthRateRouter = require('./pokemon/growthRate');
const triggerRouter = require('./pokemon/trigger');

const berryRouter = require('./items/berry');
const itemRouter = require('./items/item');

const express = require('express');
const router = express.Router();

router.use('/pokemon', pokemonRouter);
router.use('/ability', abilityRouter);
router.use('/evolution-chain', evolutionChainRouter);
router.use('/species', speciesRouter);
router.use('/type', typeRouter);
router.use('/growth-rate', growthRateRouter);
router.use('/evolution-trigger', triggerRouter);

router.use('/berry', berryRouter);
router.use('/item', itemRouter);

module.exports = router;
