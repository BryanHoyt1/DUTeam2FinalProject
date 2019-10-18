const express = require('express');
const app = express();
const newHireRouter = require('./routes/newHireRouter');
const extNewHireRouter = require('./routes/extNewHireRouter');
const loginRouter = require('./routes/loginRouter');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

app.get('/');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/login', loginRouter);
app.use('/home', newHireRouter);
app.use('/extHome', extNewHireRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});