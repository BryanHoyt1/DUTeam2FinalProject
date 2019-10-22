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
    badgeController
        .getBadgeByID(id)
        .then(response => {
            const data = response.data;
            //console.log(data);
            res.json(data);
        })
        .catch(error => console.log(error));
});

badgeRouter.post('/', (req, res) => {
    let newBadge = new Badge();

    newBadge.employeeID = req.body.employeeID; //goes to forms table?
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
    //TODO: pass employee ID in url parameter
    let badgeUpdate = new Badge();

    badgeUpdate.plateNum = req.body.plateNum;
    badgeUpdate.vehMake = req.body.vehMake;
    badgeUpdate.vehModel = req.body.vehModel;
    badgeUpdate.vehColor = req.body.vehColor;

    badgeController
        .updateBadge(req.params.id, badgeUpdate)
        .then(response => {
            const data = response.data;
            res.json(data);
        })
        .catch(error => console.log(error));
});

badgeRouter.use('/', (req, res) => {
    res.send('Badge router is working.');
});

module.exports = badgeRouter;