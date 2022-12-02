const knex = require('knex')//this is for connecting db and our server

const db = knex({
    client: 'pg',
    connection: {
        host:'localhost',
        port:'5432',
        user:'postgres',
        password:1,
        database:'dvdrental'
    }
})

module.exports = db