const bookshelf = require('../bookshelf')

const All_hanfu = bookshelf.model('All_hanfu', {
    tableName:'allhanfu'
});

const Users = bookshelf.model('Users', {
    tableName:'users'
});


module.exports = { All_hanfu,Users };