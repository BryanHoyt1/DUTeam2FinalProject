const express = require('express');
const mailRouter = express.Router();
const mailController = require('../controllers/mailController');
const NewHire = require('../models/newHire');

mailRouter.get('/', (req, res) => {
    let newHire = new NewHire();

    newHire.firstname = req.body.firstname;
    newHire.recruiter = req.body.recruiter;
    newHire.personal_email = req.body.personal_email;

    //other properties

    /* newHire.birthdate = "";
    newHire.employee_id = "";
    newHire.employee_num = "";
    newHire.lastname = "";
    newHire.los_title = "";
    newHire.phone = "";
    newHire.startdate = ""; */
    
    mailController
        .sendMailToNewEmp(newHire)
        .then(response => {
            const data = response.data;
            res.json(data);
        })
        .catch(error => console.log(error));
});

module.exports = mailRouter;