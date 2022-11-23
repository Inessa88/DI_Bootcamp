const knex = require('knex');
const db = knex({
    client: 'pg',
    connection: {
      host : 'lucky.db.elephantsql.com', //my localhost which you also can see in properties in pjadmin
      port : 5432, //also from pgadmin
      user : 'ervwsnez', //your username in localhost-prooperties in pgadmin
      password : 'LeQHlN213FoSKx9t3-rZ8dEFBSgx2Ssm', //your pasword to postgres
      database : 'ervwsnez' //your database to which you want to connect
    }
  }); //now I intered here info from elephant


//now we are building a query
//   db
//   .select('id', 'name', 'price')
//   .from('products')//this returns the promise
//   .then(data => {
//         console.log(data); 
    
//     })
//       .catch(e => {
//         console.log(e);
//     })


//the shorter version
db ('products')
  .select('id', 'name', 'price')
//   .where({id:2}) //how to use where or .where('id', 3)
  .then(data => {
        console.log(data); 
    
    })
      .catch(e => {
        console.log(e);
    })






//   db.raw('select * from products') // check if I am connected to a database, it's a knex method
//   .then(res => {
//     console.log(res.rows); //.row shows you only what you need without other stuff
//   })
//   .catch(e =>{
//     console.log(e);
//   }) //because db.raw return a promise