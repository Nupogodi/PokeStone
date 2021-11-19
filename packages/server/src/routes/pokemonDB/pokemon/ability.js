const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {
  try {
      res.status(200).send('Ability Endpoint')
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

router.post('/addAll', async (req, res) => {
  try {

    
} catch (error) {
  console.error(error);
  res.status(500).send('Server Error');
}
})


module.exports = router;
