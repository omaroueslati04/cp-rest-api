const mongoose = require('mongoose');
const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("DataBase is connected ");
    }
    catch(err){
        console.log("database is not connected");
    }
};
module.exports=connectdb;