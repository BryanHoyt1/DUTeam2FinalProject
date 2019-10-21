const express = require('express');
const badgeRouter = express.Router();
const Badge = require('../models/badge');

badgeRouter.get('/', (req, res) => {
//TODO: is a getAll required for the badge table?
});

badgeRouter.get('/:badge_id', (req, res) => {

});

badgeRouter.post('/', (req, res) => {
//TODO: build object with plateNum, vehMake, vehModel, vehColor
//and employee ID?
});

badgeRouter.put('/', (req, res) => {

});

badgeRouter.use('/', (req, res) => {
    res.send('Badge router is working.');
});

module.exports = badgeRouter;