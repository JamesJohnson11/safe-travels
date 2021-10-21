const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const dbSetup = require('./database/dbSetup');




app.use(express.json());


// SETUP DB
dbSetup();


app.listen(port, () => {
    console.log(`Server is now running on port ${port}`);
})