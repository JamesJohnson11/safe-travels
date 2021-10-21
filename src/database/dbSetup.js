const mongoose = require('mongoose');
const connectionString = process.env.DB_CONNECTION_STRING;


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


module.exports = function () {
    mongoose.connect(connectionString, connectionParams)
        .then( () => {
            console.log('Connected to database')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database.\n${err}`);
        })
}


