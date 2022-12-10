const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
    host : 'lucky.db.elephantsql.com', 
    port : 5432, 
    user : 'ervwsnez', 
    password : 'LeQHlN213FoSKx9t3-rZ8dEFBSgx2Ssm', 
    database : 'ervwsnez',
    }
})

module.exports = {
    db
}