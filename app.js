// external imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv = require('dotenv');


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
dotEnv.config();

mongoose.connect(process.env.DATABASE_CONNECTION_URI, {useNewUrlParser: true})
.then(() => {console.log('Database connection successfull.')})
.catch((err) => { console.log(err)});

app.listen(process.env.PORT, (req, res) =>{
    console.log(`Server is runging  on port ${process.env.PORT}`);
})