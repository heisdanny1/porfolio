const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Admin_schema = new Schema({
    name :{
        type : String,
        require : true
    },
    email :{
        type : String,
        require : true
    },
    subject :{
        type : String,
        require : true
    },
    message :{
        type : String,
        require : true
    }

})


module.exports = mongoose.model("message", Admin_schema)