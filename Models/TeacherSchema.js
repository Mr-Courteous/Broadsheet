const {mongoose } = require("mongoose");



// Define the schema for 2025
const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class:{type:String, required:true},
  // dateOfBirth: {type:Date, required:true},
  phoneNumber:{type:String, required:true},
  // profilePicture:{type:String, required:true},
  email:{type:String, required:true},
  address:{type:String, required:true},
  password: {type:String},

}); 


// Create a model based on the schema
const Teacher = mongoose.model('Teacher', teacherSchema,);



module.exports = Teacher;