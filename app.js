const express = require('express');
const app = express();
const port = 1010

//session
const session = require('express-session');
app.use(session({secret: "danielisagoodboy" ,saveUninitialized:true, resave:true,cookie:{expires:2678400000}}))

//setup .env
require('dotenv').config()



app.set('view engine', 'ejs');
app.use(express.static('public'))

const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))


//database
const mongoose= require('mongoose') 
mongoose.connect(process.env.mongolink,{useNewUrlParser:true,useUnifiedTopology:true}).then(result=>{
    if (result) {
        console.log('db connected');
                
    } else {
        console.log('db not connected');
    }
}).catch(err=>console.log(err))


app.listen(port,()=>{
    console.log('=========================');
    console.log('Running on port ',port);
})
// const db = require('../model/adminModel')

app.use('/', require('./router/home'))
app.use('/contact',require('./router/contact'))
app.use('/about',require('./router/about'))
app.use('/element',require('./router/elements'))
app.use('/portfolio',require('./router/portfolio'))
app.use('/service',require('./router/service'))
app.use('/admin2004',require('./router/login'))
app.use('/detail',require('./router/detail'))
app.use('/logout', require('./router/logout'))
app.use('/delete', require('./router/delete'))
app.use(require('./router/404'))


