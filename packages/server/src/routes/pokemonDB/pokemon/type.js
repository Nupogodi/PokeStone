const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {
  try {
      res.status(200).send('Type Endpoint')
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

router.post('/addAll', async (req, res) => {
  try {
    const pokeApiListURL = 'https://pokeapi.co/api/v2/type/';
    const response = await axios.get(pokeApiListURL);
    const typeListURLs = response.data.results;
    
    let types = {};
    for (let i = 0; i < typeListURLs.length; i++){
      const response = await axios.get(typeListURLs[i].url);
      const type = response.data;

      types[type.name] = type;
    }

    res.status(200).json(types);

} catch (error) {
  console.error(error);
  res.status(500).send('Server Error');
}
})

module.exports = router;
