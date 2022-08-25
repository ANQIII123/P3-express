const express = require("express");
const router = express.Router(); // #1 - Create a new express Router

const { All_hanfu } = require('../models')

//  #2 Add a new route to the Express router
router.get('/', async (req,res)=>{
    res.send('hanfu server')
})


// const Hanfu = bookshelf.model('Hanfu', {
//     tableName: 'hanfu'
//   })

  
router.get('/allHanfu', async (req,res)=>{

    // let allHanfu = [{name:'hanfu 1',price:20},{name:'hanfu 2',price:40}]
    let hanfu = await All_hanfu.collection().fetch();
    res.send(hanfu.toJSON()) 
})


module.exports = router; // #3 export out the router