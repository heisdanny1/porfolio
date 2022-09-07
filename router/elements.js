
const router =require('express').Router()

router.get('/',(req,res)=>{
    res.render('element')
})


router.use((req, res)=>{
    res.status(404).render('404') 
 })
 

module.exports=router