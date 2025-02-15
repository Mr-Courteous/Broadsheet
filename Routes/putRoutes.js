const express = require('express');
const Teacher = require('../Models/TeacherSchema');
const Student = require("../Models/studentSchema")
const { specialAuthMiddleware, authMiddleware, specialAuthMiddlewareForAdmins } = require('../protection');
const Admin = require('../Models/adminSchema');


const router = express.Router();


router.put('/:studentId', specialAuthMiddleware, async (req, res) => {
  try {
    const {
      name,
      age,
      clas,
      phoneNumber,
      email,
      address,
      parentOrGuardianName,
      parentOrGuardianNumber,
      emergencyContact,
      admissionYear,
      profilePicture,
      dateOfBirth,
    } = req.body;

    const studentId = req.params.studentId;

    const updatedStudent = await SchemaStudent.findByIdAndUpdate(studentId, {
      name: name, 
      age: age,
      class: clas,
      phoneNumber: phoneNumber,
      email: email,
      address: address,
      parentOrGuardianName: parentOrGuardianName,
      parentOrGuardianNumber: parentOrGuardianNumber,
      emergencyContact: emergencyContact,
      admissionYear: admissionYear,
      profilePicture: profilePicture,
      dateOfBirth: dateOfBirth,
    }, { new: true });





    const student = await SchemaStudent.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    student.scores[subject][year][`term${term}`] = newScores;

    await student.save();

    res.status(200).json({ message: 'Student deatils updated successfully' });
  } catch (error) {
    console.error('Error updating student score:', error);
    res.status(500).json({ error: 'Failed to update student score' });
  }
});




router.put('/updateStudentScore', specialAuthMiddleware, async (req, res) => {
  try {
    const { studentId, subject, year, term, newScores } = req.body;

    // Check for required fields
    if (!studentId || !subject || !year || !term || !newScores) {
      return res.status(400).json({ error: 'studentId, subject, year, term, and newScores are required' });
    }

    const student = await SchemaStudent.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    student.scores[subject][year][`term${term}`] = newScores;

    await student.save();

    res.status(200).json({ message: 'Student score updated successfully' });
  } catch (error) {
    console.error('Error updating student score:', error);
    res.status(500).json({ error: 'Failed to update student score' });
  }
});

router.put('/updateStudentScoresByTerm', specialAuthMiddleware, async (req, res) => {
  try {
    const { studentId, year, term, scores } = req.body;

    // Check for required fields
    if (!studentId || !year || !term || !scores) {
      return res.status(400).json({ error: 'studentId, year, term, and scores are required' });
    }

    const student = await SchemaStudent.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    for (const subject in scores) {
      if (student.scores[subject] && student.scores[subject][year]) {
        student.scores[subject][year][`term${term}`] = scores[subject][`term${term}`];
      }
    }

    await student.save();

    res.status(200).json({ message: 'Student scores updated successfully' });
  } catch (error) {
    console.error('Error updating student score:', error);
    res.status(500).json({ error: 'Failed to update student score' });
  }
});


router.put('/:teacherId', specialAuthMiddleware, async (req, res) => {
  try {
    const { name, age, clas, phoneNumber, email, address, profilePicture } = req.body;
    const teacherId = req.params.teacherId;

    // Validate request body
    if (!name || !age || !clas || !phoneNumber || !email || !address) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const updatedTeacher = await Teacher.findByIdAndUpdate(teacherId, {
      name,
      age,
      class: clas,
      phoneNumber,
      email,
      address,
      profilePicture,
    }, { new: true });

    if (!updatedTeacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    res.status(200).json({ message: 'Teacher details updated successfully' });
  } catch (error) {
    console.error('Error updating teacher details:', error);
    res.status(500).json({ error: error.message });
  }
});


router.put('/:adminId', specialAuthMiddlewareForAdmins, async (req, res) => {
  try {
    const { name, age, clas, phoneNumber, email, address, profilePicture } = req.body;
    const adminId = req.params.adminId;

    // Validate request body
    if (!name || !age || !clas || !phoneNumber || !email || !address) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, {
      name,
      age,
      phoneNumber,
      email,
      address,
      profilePicture,
    }, { new: true });

    if (!updatedAdmin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    res.status(200).json({ message: 'Admin details updated successfully' });
  } catch (error) {
    console.error('Error updating admin details:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
