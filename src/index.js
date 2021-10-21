const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();


app.use(express.json());


app.listen(port, () => {
    console.log(`Server is now running on port ${port}`);
})