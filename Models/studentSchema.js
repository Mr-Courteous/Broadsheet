const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  term1: { type: [Number], default: [0, 0] },
  term2: { type: [Number], default: [0, 0] },
  term3: { type: [Number], default: [0, 0] },
});

const subjectSchema = new mongoose.Schema({
  2025: scoreSchema,
  2026: scoreSchema,
  2027: scoreSchema,
  2028: scoreSchema,
  2029: scoreSchema,
  2030: scoreSchema,
  2031: scoreSchema,
  2032: scoreSchema,
  2033: scoreSchema,
  2034: scoreSchema,
  2035: scoreSchema,
  2036: scoreSchema,
  2037: scoreSchema,
  2038: scoreSchema,
  2039: scoreSchema,
  2040: scoreSchema,
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  class: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  // parentOrGuardianName: { type: String, required: true },
  // parentOrGuardianNumber: { type: String, required: true },
  // emergencyContact: { type: String, required: true },
  // admissionYear: { type: String, required: true },
  // profilePicture: { type: String, required: true },
  // dateOfBirth: { type: Date, required: true },
  scores: {
    English: subjectSchema,
    Mathematics: subjectSchema,
    GeneralScience: subjectSchema,
    HomeEconomics: subjectSchema,
    PHE: subjectSchema,
    CRS: subjectSchema,
    Yoruba: subjectSchema,
    PVS: subjectSchema,
    NVE: subjectSchema,
    BasicTechnology: subjectSchema
  }
});

const SchemaStudent = mongoose.model('SchemaStudent', studentSchema);

module.exports = SchemaStudent;