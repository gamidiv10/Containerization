const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const morgan = require('morgan');
const colors = require('colors');
const users = require('./routes/users');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/users', users);

const PORT = 8080;
app.listen(PORT, console.log(`Server running in development mode on port ${PORT}`.yellow.bold));