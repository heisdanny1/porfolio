
const router =require('express').Router()

router.get('/',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
        console.log('session destroy');
    })
})


module.exports=router