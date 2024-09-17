
const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Route calling
const getData = require('./Routes/getData');


// Defining middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors);

// Defining Port Number
const PORT = 9000

app.use('/cars',getData);

function connectMongoose(){
    mongoose.connect(`mongodb+srv://19bcs2420:qwertyuiop13@cluster0.l9z0dnh.mongodb.net`).then(()=>{
        console.log("Server connected Mongoose");
    })    
}
function connectToSever(){
    try {
        app.listen(PORT,()=>{console.log(`Connected to serve at ${PORT}`)})
    } catch (err) {
        console.log("Error Caught",err);
    }
}

// Connecting servers
connectToSever();
connectMongoose();
