const express = require('express');
const app = express();
const newHireRouter = require('./routes/newHireRouter');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use('/newHires', newHireRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
