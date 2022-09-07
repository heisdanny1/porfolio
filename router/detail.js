const router =require('express').Router()
const db = require('../model/adminModel')

router.get('/',(req,res)=>{
 const sess = req.session
 if (sess.admin) {
    db.find({},(err, data)=>{
        if (err) {
            console.log(err);
        } else {
            res.render('details', {msg:'', items : data})
        }
    })
 } else {
    res.redirect('/admin2004')
 }
    

})
router.get('/logout', (req, res)=>{
    
})


module.exports=router