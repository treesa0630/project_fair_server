
// import mongoose
const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    language:{
        required:true,
        type:String
    },
    github:{
        required:true,
        type:String
    },
    website:{
        required:true,
        type:String
    },
    overview:{
        required:true,
        type:String
    },
    projectImage:{
        required:true,
        type:String
    },
    userId:{
        required:true,
        type:String
    }
})

//model
const project = mongoose.model('projects',projectSchema)

// export
module.exports = project