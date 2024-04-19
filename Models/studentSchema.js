// studentSchema.js

const {mongoose } = require("mongoose");

// const mongoose = require('./dbConnection');


// Define the schema for the 'students' collection
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  class:{type:String, required:true},
  subjects:{
    Mathematics: [Number],
    English: [Number],
    BasicScience: [Number],
    GeneralPaper:[Number],
    ChristianReligionStudies:[Number],
    Computer:[Number]



}
}); 


// Create a model based on the schema
const Student = mongoose.model('Student', studentSchema,);

module.exports = Student;
