const express = require('express');
const mailRouter = express.Router();
const mailController = require('../controllers/mailController');

mailRouter.get('/:id', (req, res) => {

    const id = req.params.id;
    mailController
        .sendMailToNewEmp(id)
        .then(response => {
            const data = response.data;
            res.json(data);
        })
        .catch(error => console.log(error));
});

module.exports = mailRouter;