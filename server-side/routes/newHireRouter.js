const express = require('express');
const newHireRouter = express.Router();
const NewHire = require('../models/newHire');

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
  //console.log('get request received by router');
    const id = req.params.id;
    newHireController
      .getNewHireById(url, id)
      .then(response => {
        const data = response.data["name"];
        //console.log(data);
        res.json(data);
      })
      .catch(error => console.log(error));
});

newHireRouter.post('/', (req, res) => {
    
    let newEmp = new NewHire();
    //newEmp.empId = req.body.empId;
    newEmp.lastName = req.body.lastName;
    newEmp.firstName = req.body.firstName;
    newEmp.email = req.body.email;
    newEmp.phone = req.body.phone;
    newEmp.dateOfBirth = req.body.dateOfBirth;
    newEmp.status = false;
    
    newHireController
      .createNewHire(url, newEmp)
      .then(response => {
        const data = response.data;
        res.json(data);
      })
      .catch(error => console.log(error));
});

newHireRouter.put('/:id', (req, res) => {
    let empUpdate = new NewHire();
    empUpdate.lastName = req.body.lastName;
    empUpdate.firstName = req.body.firstName;
    empUpdate.email = req.body.email;
    empUpdate.phone = req.body.phone;
    empUpdate.dateOfBirth = req.body.dateOfBirth;
    newEmp.status = req.body.status;

    newHireController
      .updateNewHire(url, empUpdate)
      .then(response => {
        const data = response.data;
        res.json(data);
      })
      .catch(error => console.log(error));
})

newHireRouter.use('/', (req, res) => {
    res.send('router is working');
}); 


module.exports = newHireRouter;