const express = require('express');
const extLoginRouter = express.Router();
const Credentials = require('../models/credentials');

const extLonginController = require('../controllers/extLoginController');

extLoginRouter.post('/', (req, res) => {
    
    let credentials = new Credentials();
    
    credentials.personal_email = req.body.personal_email;
    credentials.lastname = req.body.lastname;
  
    extLonginController
      .externalLogin(credentials)
      .then(response => {
        const data = response.data;
        res.json(data);
      })
      .catch(error => console.log(error));
});

module.exports = extLoginRouter;