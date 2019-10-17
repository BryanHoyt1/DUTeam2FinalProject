const express = require('express');
const newHireRouter = express.Router();
const NewHire = require('../models/newHire');

const newHireController = require('../controllers/newHireController');



newHireRouter.get('/', (req, res) => {
  
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
  
    const id = req.params.id;
    newHireController
      .getNewHireById(id)
      .then(response => {
        //TODO: update what fields are sent back to browser....send entire object?
        const data = response.data;
        //console.log(data);
        res.json(data);
      })
      .catch(error => console.log(error));
});

newHireRouter.post('/', (req, res) => {
    
  //TODO: make sure this includes all required fields (only required fields?)
    let newEmp = new NewHire();
    
    newEmp.lastname = req.body.lastname;
    newEmp.firstname = req.body.firstname;
    newEmp.persemail = req.body.persemail;
    newEmp.phone = req.body.phone;
    newEmp.dateOfBirth = req.body.dateOfBirth;
    newEmp.recruiter = req.body.recruiter;
    newEmp.startdate = req.body.startdate;
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
  //TODO: add badge form fields?
    let empUpdate = new NewHire();

    
    empUpdate.lastname = req.body.lastname;
    empUpdate.firstname = req.body.firstname;
    empUpdate.empNum = req.body.empNum;
    empUpdate.persemail = req.body.persemail;
    empUpdate.phone = req.body.phone;
    empUpdate.birthdate = req.body.birthdate;
    empUpdate.status = req.body.status;
    empUpdate.LOS_title = LOS_title;
    empUpdate.recruiter = req.body.recruiter;
    empUpdate.startdate = req.body.startdate;

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

//TODO: add delete route

newHireRouter.use('/', (req, res) => {
    res.send('router is working');
}); 


module.exports = newHireRouter;