const { CartItem } = require('../models');

const getCart = async (userId) => {
    return await CartItem.collection()
        .where({
            'user_id': userId
        }).fetch({
            require: false,
            withRelated: ['All_hanfu','Users']
    });
}

const getCartItemByUserAndProduct = async (userId, productId) => {
    return await CartItem.where({
        'user_id': userId,
        'hanfu_id': productId
    }).fetch({
        require: false
    });
}

async function createCartItem(userId, productId, quantity) {
    console.log('creating cart item')
    let cartItem = new CartItem({
        'user_id': userId,
        'hanfu_id': productId,
        'quantity': quantity
    })
    await cartItem.save();
    return cartItem;
}

async function removeFromCart(userId, productId) {
    let cartItem = await getCartItemByUserAndProduct(userId, productId);
    if (cartItem) {
        await cartItem.destroy();
        return true;
    }
    return false;
}

async function updateQuantity(userId, productId, newQuantity) {
    let cartItem = await getCartItemByUserAndProduct(userId, productId);
    if (cartItem) {
        cartItem.set('quantity', newQuantity);
        cartItem.save();
        return true;
    }
    return false;
}

module.exports = { getCart, getCartItemByUserAndProduct, createCartItem, removeFromCart, updateQuantity }