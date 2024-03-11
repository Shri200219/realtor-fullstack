const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const userRouter = require('../api/routes/user.route')
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>
{
    console.log("Connected to DB");
}).catch((err)=>
{
    console.log(err);
})

const app = express();

app.listen(3002,()=>
{
    console.log("Server running on port 3000!!");
})

app.use('/api/user',userRouter); 