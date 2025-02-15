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
  verificationCode: { type: String, expires: 3600 }, // Expires after 1 hour
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  resetPasswordToken: String, 
  resetPasswordExpires: Date 






});


const Admin = mongoose.model('Admin', studentSchema,);










module.exports = Admin;
