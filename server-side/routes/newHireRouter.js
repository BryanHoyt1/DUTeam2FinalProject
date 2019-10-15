const express = require('express');
const newHireRouter = express.Router();
const axios = require('axios');





newHireRouter.use('/', (req, res) => {
    res.send('router is working');
});


module.exports = newHireRouter;