const bookshelf = require('../bookshelf')

const All_hanfu = bookshelf.model('All_hanfu', {
    tableName:'allhanfu',
    CartItem() {
        return this.hasMany('CartItem');
    }
});

const Users = bookshelf.model('Users', {
    tableName:'users',
    CartItem() {
        return this.hasMany('CartItem');
    }
});

const CartItem = bookshelf.model('CartItem', {
    tableName: 'cart_items',
    All_hanfu() {
        return this.belongsTo('All_hanfu')
    },
    Users() {
        return this.belongsTo('Users')
    }
    // make use of foreign
})

module.exports = { All_hanfu,Users,CartItem };