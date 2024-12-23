const { mongoose } = require("mongoose");



// Define the schema for students
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  // profilePicture:{type:String, required:true},
  email: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  position: { type: String, required: true },






});


const Admin = mongoose.model('Admin', studentSchema,);










module.exports = Admin;
