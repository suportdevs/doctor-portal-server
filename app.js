// external imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv = require('dotenv');


const app = express();
app.use(bodyParser.json());
app.use(cors());