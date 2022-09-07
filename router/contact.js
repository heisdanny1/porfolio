const router = require('express').Router()

const msgs = require('../model/adminModel')
router.get('/',(req,res)=>{
    res.render('contact', {msg : ''})
})

router.post('/', (req, res)=>{
    const collect = req.body;
   if (collect.name && collect.email && collect.subject && collect.message) {
            const newmsg = new msgs ({name:collect.name, email:collect.email, subject:collect.subject, message:collect.message})
            newmsg.save(err=>{
                if (err) {
                    console.log('====================================');
                    console.log(err);
                    console.log('====================================');
                } else {
                    res.render("contact", {msg : "Message sent successfully..."})
                }
            })
   } else {
    
   }
})
module.exports=router