
const router =require('express').Router()
const db = require('../model/adminModel')

router.get('/',(req,res)=>{
    res.render('login', {msg:'', history:''})
})

router.post('/', (req ,res)=>{
    const collect = req.body
    const sess= req.session;
    const errormsg = "incorrect email or password..."
    if (collect.email == process.env.email && collect.password == process.env.password) {
        sess.admin = collect.email
        res.redirect('/detail')
    } else {
        res.render('login', {msg : errormsg})
    }
    
})
module.exports=router