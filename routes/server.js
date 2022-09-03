const express = require("express");
const router = express.Router(); // #1 - Create a new express Router

const CartServices = require("../services/cart_services")
const { All_hanfu, Users } = require('../models')

//  #2 Add a new route to the Express router
router.get('/', async (req, res) => {
    res.send('hanfu server')
})


// const Hanfu = bookshelf.model('Hanfu', {
//     tableName: 'hanfu'
//   })

router.post('/cart', async (req, res) => {
    if (req.body.user) {
        let cart = new CartServices(req.body.user.id);
        res.send({
            'shoppingCart': (await cart.getCart()).toJSON()
        })
    }else{
        res.sendStatus(400)
    }
})

router.post('/:hanfu_id/add', async (req,res)=>{
    let cart = new CartServices(req.body.user.id);
    await cart.addToCart(req.params.hanfu_id, 1);
    console.log(cart)
    res.sendStatus(200)
})


router.get('/allHanfu', async (req, res) => {
    let hanfu = await All_hanfu.collection().fetch();
    res.send(hanfu.toJSON())
})

router.post('/register', async (req, res) => {
    let { email, userName, password } = req.body
    const user = new Users();
    user.set('email', req.body.email);
    user.set('username', req.body.userName);
    user.set('password', req.body.password);
    await user.save();

    console.log('registered', email, userName, password)
    res.status(200)
    res.send(req.body.email)
})

router.post('/login', async (req, res) => {
    // ...find the user by email and password
    let user = await Users.where({
        'email': req.body.email
    }).fetch({
        require: false
    }
    );

    if (!user) {

        res.send([false, 'Email not found'])
        return

    } else {

        // check if the password matches
        if (user.get('password') === req.body.password) {

            // add to the session that login succeed
            // store the user details
            req.session.user = {
                id: user.get('id'),
                username: user.get('username'),
                email: user.get('email')
            }
            req.session.save()
            res.send([true, { user: req.session.user }])
            return

        } else {
            res.send([false, 'password does not match'])
            return
        }
    }


})


module.exports = router; // #3 export out the router