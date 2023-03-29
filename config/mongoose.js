const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Todo_Task');

const db =mongoose.connection;
db.on('error',console.error.bind(console,"Error in connecting to mongoDB"));

db.once('open',()=>{
    console.log("connected to Database :: MongoDB ")
})


module.exports = db;