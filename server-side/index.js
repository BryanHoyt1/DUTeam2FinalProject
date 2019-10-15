const express = require('express');
const app = express();
const axios = require('axios');
const newHireRouter = ('./routes/newHireRouter');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/newHires', newHireRouter);