const mongoose = require("mongoose"); 

function mongoConnect()  {
    mongoose.connect("mongodb+srv://yashnigam282:yash1212@cluster0.tjl2vgb.mongodb.net/user",{
        useNewUrlParser:true, 
        useUnifiedTopology:true, 
       
     })
    .then(()=>console.log("MongoDB connected"))
    .catch((error)=>console.log(error.message))
}

module.exports = mongoConnect

