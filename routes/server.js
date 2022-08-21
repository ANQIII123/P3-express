const express = require("express");
const router = express.Router(); // #1 - Create a new express Router


//  #2 Add a new route to the Express router
router.get('/', (req,res)=>{
    res.send('this is a response')
})


// const Hanfu = bookshelf.model('Hanfu', {
//     tableName: 'hanfu'
//   })

  
router.get('/allHanfu', async (req,res)=>{

    let allHanfu = [{name:'hanfu 1',price:20},{name:'hanfu 2',price:40}]
    // let allHanfu = await Hanfu.fetch({require:true});

    res.send(allHanfu)
})


module.exports = router; // #3 export out the router