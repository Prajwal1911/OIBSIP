const express = require('express');
const port = 8000;

const db = require('./config/mongoose')


const app = express();



// middleWare:
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))

// routes require:
app.use(require('./routes/home'));
app.use(require('./routes/todos'))


app.set('view engine','ejs');


app.listen(port,()=> console.log("server is up and running on port :",port))