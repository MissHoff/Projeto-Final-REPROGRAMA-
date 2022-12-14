const mongoose = require("mongoose");



const blogSchema = new mongoose.Schema({
   _id:{
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId
     },
      
    userAuthor: {
        type: String,
        required: true,
        unique: true
      },
    
    title: {
      type: String,
      minLength: 0,
      maxLength: 100,
      default: "No title"
  },

      content: {
      type: String,
      minLength: 0,
      maxLength: 1000,
      default: "No content"
  }
},
    {timestamps: true,})

 const Model = mongoose.model("blogapi", blogSchema);
    
  
  module.exports = Model;