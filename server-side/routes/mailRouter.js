const express = require('express');
const mailRouter = express.Router();
const mailController = require('../controllers/mailController');
const NewHire = require('../models/newHire');

mailRouter.get('/', (req, res) => {

     let emp = new NewHire();
    emp.firstname = req.body.firstname;
    emp.recruiter = req.body.recruiter;
    emp.personal_email = req.body.personal_email;

    mailController
        .sendMailToNewEmp(emp)
        .then(response => {
            const data = response.data;
            res.json(data);
        })
        .catch(error => console.log(error));
});

module.exports = mailRouter;