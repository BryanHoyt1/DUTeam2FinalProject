const express = require('express');
const app = express();
const newHireRouter = require('./routes/newHireRouter');
const extNewHireRouter = require('./routes/extNewHireRouter');
const loginRouter = require('./routes/loginRouter');
const badgeRouter = require('./routes/badgeRouter');
const bodyParser = require('body-parser');
//app.use(express.bodyParser());

const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());


app.get('/');
app.use(bodyParser.urlencoded({extended: false}));


app.use('/login', loginRouter);
app.use('/home', bodyParser.json(), newHireRouter);
app.use('/extHome', bodyParser.json(), extNewHireRouter);
app.use('/badge', bodyParser.json(), badgeRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
