const express= require('express');
const { json }= require('body-parser');
const cors= require('cors');
const { apiURL, apiKey }= require('../config.js');
const axios= require('axios');

// Begin Server
const app= express();
const port= 3001;

// Middlewares
app.use(json());
app.use(cors());

// Endpoints
app.get('/api/popular/movies', (req, res, next)=> {
  axios.get(`${apiURL}/movie/popular${apiKey}`).then(response=> {
    res.status(200).json(response.data);
  });
});

app.get('/api/search/movies?name=', (req, res, next)=> {
  axios.get(`${apiURL}/search/movie${apiKey}&language=en-US&page=1&include_adult=true&query=${req.params.name}`)
});

app.listen(port, ()=> {
  console.log(`Server is listening on port: ${port}`);
});
