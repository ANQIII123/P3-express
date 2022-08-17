const express = require("express");
const router = express.Router(); // #1 - Create a new express Router


//  #2 Add a new route to the Express router
router.get('/', (req,res)=>{
    res.render('homepage/index')
})

router.get('/aboutUs', (req,res)=>{
    res.render('homepage/aboutUs')
})

router.get('/contactUs', (req,res)=>{
    res.render('homepage/contactUs')
})

module.exports = router; // #3 export out the router