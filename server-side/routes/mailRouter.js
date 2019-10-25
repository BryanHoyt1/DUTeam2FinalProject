const express = require('express');
const mailRouter = express.Router();
const mailController = require('../controllers/mailController');
const Mail = require('../models/mail');

mailRouter.post('/', (req, res) => {

    let mail = new Mail();

    mail.firstname = req.body.firstname;
    mail.recruiter = req.body.recruiter;
    mail.personal_email = req.body.personal_email;

    mailController
        .sendMailToNewEmp(mail)
        .then(response => {
            const data = response.data;
            res.json(data);
        })
        .catch(error => console.log(error));
});

module.exports = mailRouter;