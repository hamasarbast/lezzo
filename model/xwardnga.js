const mongoose = require("mongoose");
const xwardngaSchema = mongoose.Schema({
  NaweXwardnga: {
    type: String,
    required: true,
  },
  KateKrdnawa: {
    type: String,
    required: true,
  },
  KateDaxstn: {
    type: String,
    required: true,
  },
  image: {
    type: String
  },
  xwardnakan:[
    {
      naweXwardn:{
        type: String,
        required: true
        
      },
      nrxeXwardn:{
        type: String,
        required: true
       
      },
      runkrdnawa:{
        type: String,
        required: true
        
      },
      image:{
        type: String,
        required: true
      },
      joreXwardn:{
        type: String,
        required: true
      } 
       
      
      
    }
  ]
});


module.exports = mongoose.model("Xwardnga", xwardngaSchema);


