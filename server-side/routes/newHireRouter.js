const express = require('express');
const newHireRouter = express.Router();

const newHireController = require('../controllers/newHireController');

const url = 'https://pokeapi.co/api/v2/pokemon';

newHireRouter.get('/', (req, res) => {
  console.log('get request received by router');
  //newHireController.getNewHires(req, res);
  
  newHireController(url);
    
  res.send();
});

newHireRouter.get('/:id', (req, res) => {
    newHireController(url, id);
    res.send();
});

newHireRouter.use('/', (req, res) => {
    res.send('router is working');
}); 


module.exports = newHireRouter;