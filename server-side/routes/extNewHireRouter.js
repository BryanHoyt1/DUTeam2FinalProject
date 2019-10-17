const express = require('express');
const extNewHireRouter = express.Router();
const NewHire = require('../models/newHire');

const newHireController = require('../controllers/newHireController');

extNewHireRouter.get('/', (req, res) => {
    //console.log('get request received by router');
    return "You are not authorized to see all records";
});

extNewHireRouter.get('/:id', (req, res) => {
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

extNewHireRouter.post('/', (req, res) => {
    return "You are not authorized to create a new record."
});

extNewHireRouter.put('/:id', (req, res) => {
    let empUpdate = new NewHire();

    
    empUpdate.lastName = req.body.lastName;
    empUpdate.firstName = req.body.firstName;
    empUpdate.email = req.body.email;
    empUpdate.phone = req.body.phone;
    empUpdate.dateOfBirth = req.body.dateOfBirth;
    empUpdate.status = req.body.status;

    newHireController
      .updateNewHire(req.params.id ,empUpdate)
      .then(response => {
        const data = response.data;
        res.json(data);
      })
      .catch(error => console.log(error));
})

extNewHireRouter.use('/', (req, res) => {
    res.send('external router is working');
}); 


module.exports = extNewHireRouter;