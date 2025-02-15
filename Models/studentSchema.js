const mongoose = require('mongoose');

// const scoreSchema = new mongoose.Schema({
//   term1: { type: [Number], default: [0, 0] },
//   term2: { type: [Number], default: [0, 0] },
//   term3: { type: [Number], default: [0, 0] },
// });

// const subjectSchema = new mongoose.Schema({
//   2025: scoreSchema,
//   2026: scoreSchema,
//   2027: scoreSchema,
//   2028: scoreSchema,
//   2029: scoreSchema,
//   2030: scoreSchema,
//   2031: scoreSchema,
//   2032: scoreSchema,
//   2033: scoreSchema,
//   2034: scoreSchema,
//   2035: scoreSchema,
//   2036: scoreSchema,
//   2037: scoreSchema,
//   2038: scoreSchema,
//   2039: scoreSchema,
//   2040: scoreSchema,
// });

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: {
    type: Date,
    required: true
  }, 
  class: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  // parentOrGuardianName: { type: String, required: true },
  // parentOrGuardianNumber: { type: String, required: true },
  // emergencyContact: { type: String, required: true },
  // admissionYear: { type: String, required: true },
  // profilePicture: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  password:{type: String, required : true},

  scores: {
    type: Object,
    default: {
      "English": {
        "2025": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2026": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2027": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2028": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2029": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2030": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2031": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2032": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2033": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2034": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2035": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2036": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2037": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2038": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2039": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2040": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] }
      },
      "Mathematics": {
        "2025": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2026": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2027": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2028": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2029": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2030": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2031": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2032": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2033": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2034": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2035": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2036": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2037": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2038": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2039": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2040": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] }
      },


      "GeneralScience": {
        "2025": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2026": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2027": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2028": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2029": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2030": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2031": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2032": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2033": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2034": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2035": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2036": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2037": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2038": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2039": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2040": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] }
      },

      "HomeEconomics": {
        "2025": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2026": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2027": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2028": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2029": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2030": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2031": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2032": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2033": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2034": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2035": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2036": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2037": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2038": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2039": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2040": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] }
      },


      "PHE": {
        "2025": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2026": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2027": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2028": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2029": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2030": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2031": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2032": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2033": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2034": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2035": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2036": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2037": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2038": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2039": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2040": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] }
      },



      "CRS": {
        "2025": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2026": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2027": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2028": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2029": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2030": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2031": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2032": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2033": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2034": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2035": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2036": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2037": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2038": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2039": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2040": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] }
      },

      "Yoruba": {
        "2025": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2026": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2027": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2028": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2029": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2030": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2031": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2032": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2033": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2034": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2035": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2036": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2037": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2038": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2039": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2040": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] }
      },
      "PVS": {
        "2025": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2026": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2027": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2028": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2029": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2030": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2031": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2032": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2033": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2034": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2035": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2036": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2037": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2038": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2039": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2040": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] }
      },

      "NVE": {
        "2025": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2026": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2027": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2028": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2029": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2030": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2031": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2032": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2033": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2034": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2035": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2036": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2037": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2038": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2039": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2040": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] }
      },
      "BasicTechnology": {
        "2025": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2026": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2027": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2028": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2029": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2030": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2031": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2032": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2033": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2034": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2035": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2036": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2037": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2038": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2039": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] },
        "2040": { "term1": [0, 0], "term2": [0, 0], "term3": [0, 0] }
      }
      // ... remaining subjects with the same structure
    }
  },
  // scores: {
  //   English: subjectSchema,
  //   Mathematics: subjectSchema,
  //   GeneralScience: subjectSchema,
  //   HomeEconomics: subjectSchema,
  //   PHE: subjectSchema,
  //   CRS: subjectSchema,
  //   Yoruba: subjectSchema,
  //   PVS: subjectSchema,
  //   NVE: subjectSchema,
  //   BasicTechnology: subjectSchema
  // }
});

module.exports  = mongoose.model('Student', studentSchema);

