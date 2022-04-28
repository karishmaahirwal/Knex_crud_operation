// var fs=require('fs');
// const axios=require('axios')
// var link="https://api.merakilearn.org/courses"
// axios.get(link)
// .then((response)=>{
//     var DATA=response.data
//     var myJSON=JSON.stringify(DATA,null,4);
//     fs.writeFileSync("data.json",myJSON)

// })
// .catch((error)=>{
//     console.log(error)
// })

var create = require('../model/database')
const saral_data = require('./data.json')
for (i of saral_data){
    create('project2').insert({
        id:i.id,
        name:i.name,
        logo:i.logo,
        notes:i.notes,
        days_to_complete:i.days_to_complete, 
        short_description:i.short_description,
        course_type:i.course_type,
        lang_available:i.lang_available
    })
    .then(()=>{
        console.log(" not inserted")
    }).catch(()=>{
        console.log("inserted")
    })
}
