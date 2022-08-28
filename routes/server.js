const express = require("express");
const router = express.Router(); // #1 - Create a new express Router

const { All_hanfu, Users } = require('../models')

//  #2 Add a new route to the Express router
router.get('/', async (req, res) => {
    res.send('hanfu server')
})


// const Hanfu = bookshelf.model('Hanfu', {
//     tableName: 'hanfu'
//   })


router.get('/allHanfu', async (req, res) => {

    let hanfu = await All_hanfu.collection().fetch();
    res.send(hanfu.toJSON())
})

router.post('/register', async (req, res) => {
    let {email,userName,password} = req.body
    const user = new Users();
    user.set('email', req.body.email);
    user.set('username', req.body.userName);
    user.set('password', req.body.password);
    await user.save();

    console.log(email, userName, password)
})


module.exports = router; // #3 export out the router