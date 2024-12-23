const express = require('express');
const Student = require('../Models/adminSchema');
const Teacher = require('../Models/TeacherSchema');
const SchemaStudent = require("../Models/studentSchema")
const Admin = require ('../Models/adminSchema')

const router = express.Router();


router.delete('/:studentId', async (req, res) => {
  try {
    const studentId = req.params.studentId;

    // Validate admin ID
    if (!studentId) {
      return res.status(400).json({ error: 'Please provide a valid student ID' });
    }

    const deletedStudent = await SchemaStudent.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin:', error);
    res.status(500).json({ error: error.message });
  }
});



router.delete('/:adminId', specialAuthMiddlewareForAdmins, async (req, res) => {
  try {
    const adminId = req.params.adminId;

    // Validate admin ID
    if (!adminId) {
      return res.status(400).json({ error: 'Please provide a valid admin ID' });
    }

    const deletedAdmin = await Admin.findByIdAndDelete(adminId);

    if (!deletedAdmin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin:', error);
    res.status(500).json({ error: error.message });
  }
});


router.delete('/:teacherId', specialAuthMiddlewareForAdmins, async (req, res) => {
  try {
    const teacherId = req.params.teacherId;

    // Validate admin ID
    if (!teacherId) {
      return res.status(400).json({ error: 'Please provide a valid admin ID' });
    }

    const deletedAdmin = await Teacher.findByIdAndDelete(teacherId);

    if (!deletedAdmin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin:', error);
    res.status(500).json({ error: error.message });
  }
});





module.exports = router;
