const knex=require("knex")({
  client:"mysql",
  connection:{
    host:"localhost",
    user:"root",
    password:"Karishma@123",
    database:"project2"
  }
})

knex.schema.hasTable('project2').then(function(exists){
  if (!exists){
    return knex.schema.createTable('project2',function(table){

      table.string('id',255)
      table.string('name',255)
      table.string('logo',255)
      table.string('notes',255)
      table.string('days_to_comlete',255)
      table.string('short_description',255)
      table.string('html',255)
      table.string('course_type',255)
      table.string('lang_available',255)

    })
    .then(()=>{
      console.log("Table created")
    }).catch((err)=>{
      console.log(err)
    })
  }
})



//   table.increments('id')
//   table.string('name')
//   table.string('logo')
//   table.string('notes')
//   table.increments('days_to_comlete')
//   table.string('short_description')
//   table.string('html')
//   table.string('course_type')
//   table.string('lang_available')
    
// }).then(() =>
// console.log("table created"))
// .catch(() => { 
// console.log("table already exist") 
// })



// // INSERTED DATA
// const options = {
//     client: 'mysql',
//     connection: {
//         host: 'localhost',
//         user: 'root',
//         password: 'Karishma@123',
//         database: 'project2nd'
//     }
// }
// const knex = require('knex')(options);

// const project2nd = [
//     { id: '53' },
//     { logo: "Understanding programming through recursion" },
//     { notes: "null" },
//     { days_to_complete: '45' },
//     { short_description: "Iss course ko hum use kar kar recursions aur programming ki depth mei jayenge." },
//     { type: "html" },
//     { course_type: null },
//     { lang_available: "en" },
// ]

// knex('project2nd').insert(project2nd)
// .then(() =>{
// console.log("data inserted")})
// .catch((err) => {
// console.log("data didn't inserted")
// });


// // SELECT *FROM
// const options = {
//   client: 'mysql',
//   connection: {
//       host: 'localhost',
//       user: 'root',
//       password: 'Karishma@123',
//       database: 'project2nd'
//   }
// }
// const knex = require('knex')(options);

// knex.from('cars').select("*")
//   .then((rows) => {
      
//   }).catch((err) => { console.log( err); throw err })


module.exports=knex
