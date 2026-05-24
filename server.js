const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();

const connectDB = require('./config/dbconnect');
connectDB();

app.use('/user', require('./routes/user'));
app.use('/product', require('./routes/product'));
app.listen(process.env.PORT, (err) => 
    err ? console.log(err) : console.log('Server is running on port ' + process.env.PORT));