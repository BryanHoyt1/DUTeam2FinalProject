const express = require('express');
const badgeRouter = express.Router();
const Badge = require('../models/badge');
const badgeController = require('../controllers/badgeController');

badgeRouter.get('/', (req, res) => {
//TODO: is a getAll required for the badge table?
});

badgeRouter.get('/:id', (req, res) => {
//TODO: which id is passed in the url? badge or employee?
const id = req.params.id;

});

badgeRouter.post('/', (req, res) => {
    let newBadge = new Badge();

    newBadge.employeeID = req.body.employeeID;
    newBadge.plateNum = req.body.plateNum;
    newBadge.vehMake = req.body.vehMake;
    newBadge.vehModel = req.body.vehModel;
    newBadge.vehColor = req.body.vehColor;

    badgeController.createBadge(newBadge)
        .then(response => {
        const data = response.data;
        res.json(data);
    })
    .catch(error => console.log(error));
});

badgeRouter.put('/:id', (req, res) => {

});

badgeRouter.use('/', (req, res) => {
    res.send('Badge router is working.');
});

module.exports = badgeRouter;