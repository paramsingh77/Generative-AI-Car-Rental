const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    Name: {
        type:String,
        required:true,
        unique:true,
    },
    Year:{
        type:String,
        required:true,
        unique:true,
    },
    Modal:{
        type:String,
        required:true,
    },
    Make:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        required:true,
    }
});


const Cars = mongoose.model('Cars', carSchema );

module.exports = Cars;

