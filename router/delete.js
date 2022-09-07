const db = require('../model/adminModel')
const router =require('express').Router()

router.get('/:id', (req,res)=>{
    const sess = req.session;
    const id = req.params.id
    if (sess.admin) {
        db.find({_id : id, admin : sess.admin}, (err,data)=>{
            if (err) {
                console.log('====================================');
                console.log(err); 
                console.log('====================================');
            } else {
                if (data) {
                    db.remove({_id : id, admin :sess.admin},(err)=>{
                        if (err) {
                            console.log('====================================');
                            console.log(err);
                            console.log('====================================');
                        } else {
                            res.redirect('/detail')
                        }
                    })
                } else {
                    res.render('details', {msg : "Error occur while deleting...", items : ''})
                }
            }
        })
    } else {
        res.redirect('/detail')
    }

})


module.exports=router