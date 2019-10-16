const express = require('express');
const newHireRouter = express.Router();

const newHireController = require('../controllers/newHireController');

const url = 'https://pokeapi.co/api/v2/pokemon';

newHireRouter.get('/', (req, res) => {
  //console.log('get request received by router');
  newHireController
  .getNewHires(url, res)
  .then(response =>{
    const data = response.data;
    //console.log(data);
    //return data;
    res.json(data);
  })
  .catch(error => console.log(error));
});

newHireRouter.get('/:id', (req, res) => {
  console.log('get request received by router');
    newHireController
    //.getNewHireById(url, id)
    .getNewHireById(url, req.params)
    .then(response => {
      const data = response.data;
      res.json(data);
    })
    .catch(error => console.log(error));
});

newHireRouter.use('/', (req, res) => {
    res.send('router is working');
}); 


module.exports = newHireRouter;