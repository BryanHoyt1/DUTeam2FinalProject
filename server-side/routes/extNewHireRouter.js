const express = require('express');
const extNewHireRouter = express.Router();
const NewHire = require('../models/newHire');

const newHireController = require('../controllers/newHireController');

extNewHireRouter.get('/', (req, res) => {
    
    return res.json("You are not authorized to see all employee records");
});

extNewHireRouter.get('/:id', (req, res) => {
    
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

extNewHireRouter.post('/', (req, res) => {

    return res.json("You are not authorized to create a new record.");
});

extNewHireRouter.put('/:id', (req, res) => {
    let empUpdate = new NewHire();

    
    empUpdate.lastname = req.body.lastname;
    empUpdate.firstname = req.body.firstname;
    empUpdate.empNum = req.body.empNum;
    empUpdate.personal_email = req.body.personal_email;
    empUpdate.phone = req.body.phone;
    empUpdate.birthdate = req.body.birthdate;
    empUpdate.status = req.body.status;
    empUpdate.los_title = req.body.los_title;
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

extNewHireRouter.patch('/:id', (req, res) => {
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

extNewHireRouter.delete('/:id', (req, res) => {
  res.json("You are not authorized to delete records.");
});

extNewHireRouter.use('/', (req, res) => {
    res.send('external router is working');
}); 


module.exports = extNewHireRouter;