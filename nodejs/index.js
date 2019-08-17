const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js'); 
var users = require('./controller/loginCntrl');
var workorderCntrl =require('./controller/workorderCntrl');
var imsCntrl =require('./controller/imsCntrl');
var jmsCntrl =require('./controller/jmsCntrl');
var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/login',users)
app.use('/workOrder',workorderCntrl);
app.use('/ims',imsCntrl);
app.use('/jms',jmsCntrl);
// app.use('/hospitals',hospitals)
app.listen(3000, () => console.log('Server started at port : 3000'));


