// const { mongoose } = require("mongoose");



// // Define the schema for 2025
// const teacherSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   class: { type: String, required: true },
//   // dateOfBirth: {type:Date, required:true},
//   phoneNumber: { type: String, required: true },
//   // profilePicture:{type:String, required:true},
//   email: { type: String, required: true },
//   address: { type: String, required: true },
//   password: { type: String },
//   verificationCode: { type: String, expires: 3600 }, // Expires after 1 hour
//   isVerified: { type: Boolean, default: false }


// });


// // Create a model based on the schema
// const Teacher = mongoose.model('Teacher', teacherSchema,);



// module.exports = Teacher;


const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }, 
  class: { type: String, required: true, trim: true },
  // dateOfBirth: { type: Date, required: true }, // Uncomment if needed
  phoneNumber: { type: String, required: true,}, // Validate phone number format
  // profilePicture: { type: String, required: true }, // Uncomment if needed
  email: { type: String, required: true, unique: true, lowercase: true }, 
  address: { type: String, required: true, trim: true }, 
  password: { type: String, required: true },
  verificationCode: { type: String, expires: 3600 }, // Expires after 1 hour
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  resetPasswordToken: String, 
  resetPasswordExpires: Date 
});

module.exports = mongoose.model('Teacher', teacherSchema);