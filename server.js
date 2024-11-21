const express= require('express');
const app= express();
require('dotenv').config();
const port= process.env.port
app.use(express.json())
const connectdb=require('./config/connectdb');
connectdb();
const userroutes=require('./routes/user');
app.use('/user',userroutes);








app.listen(port,(err)=>{
    (err)? console.error('Server in not running') : console.log('server running at PORT 3000');
})


