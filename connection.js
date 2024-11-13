// import mongoose
const mongoose = require('mongoose')

connectionstring = process.env.DATABASE

mongoose.connect(connectionstring).then(()=>{
    console.log(`MongoDB connected successfully`);
    
}).catch((err)=>{
    console.log(`Connection to MongoDB failed due to ${err}`);
    
})