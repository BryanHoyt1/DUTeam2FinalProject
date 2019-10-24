const express = require('express');
const app = express();
const newHireRouter = require('./routes/newHireRouter');
const extNewHireRouter = require('./routes/extNewHireRouter');
const loginRouter = require('./routes/loginRouter');
const badgeRouter = require('./routes/badgeRouter');
const mailRouter = require('./routes/mailRouter');
const extLoginRouter = require('./routes/extLoginRouter');
const bodyParser = require('body-parser');
//app.use(express.bodyParser());

const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());


app.get('/');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/login', loginRouter);
app.use('/home', newHireRouter);
app.use('/extHome', extNewHireRouter);
app.use('/badge', badgeRouter);
//app.use('/mail', mailRouter);
app.use('/extLogin', extLoginRouter);
app.use('/mail', bodyParser.json(), mailRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
