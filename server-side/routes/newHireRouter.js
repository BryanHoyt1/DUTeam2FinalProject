const express = require('express');
const newHireRouter = express.Router();
const NewHire = require('../models/newHire');

const newHireController = require('../controllers/newHireController');

//const url = 'https://pokeapi.co/api/v2/pokemon';

newHireRouter.get('/', (req, res) => {
  //console.log('get request received by router');
  newHireController
  .getNewHires(res)
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
      .getNewHireById(id)
      .then(response => {
        //TODO: update what fields are sent back to browser....send entire object?
        const data = response.data["name"];
        //console.log(data);
        res.json(data);
      })
      .catch(error => console.log(error));
});

newHireRouter.post('/', (req, res) => {
    
  //TODO: make sure this includes all required fields (only required fields?)
    let newEmp = new NewHire();
    
    newEmp.lastName = req.body.lastName;
    newEmp.firstName = req.body.firstName;
    newEmp.email = req.body.email;
    newEmp.phone = req.body.phone;
    newEmp.dateOfBirth = req.body.dateOfBirth;
    //newEmp.status = false;
    
    newHireController
      .createNewHire(newEmp)
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
    empUpdate.empNum = req.body.empNum;
    empUpdate.email = req.body.email;
    empUpdate.phone = req.body.phone;
    empUpdate.birthdate = req.body.birthdate;
    empUpdate.status = req.body.status;
    empUpdate.los = los;
    empUpdate.recruiter = req.body.recruiter;
    empUpdate.startDate = req.body.startDate;

    newHireController
      .updateNewHire(req.params.id ,empUpdate)
      .then(response => {
        const data = response.data;
        res.json(data);
      })
      .catch(error => console.log(error));
});

newHireRouter.patch('/:id', (req, res) => {
  for(let key in req.body) {
    NewHire[key] = req.body[key];
  }

  newHireController
    .patchNewHire(req.params.id, NewHire)
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