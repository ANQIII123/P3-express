const bookshelf = require('../bookshelf')

const All_hanfu = bookshelf.model('All_hanfu', {
    tableName:'allhanfu'
});

module.exports = { All_hanfu };