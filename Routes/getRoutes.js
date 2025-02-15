const express = require('express');
const Teacher = require('../Models/TeacherSchema');
const Admin = require('../Models/adminSchema')
const Student = require("../Models/studentSchema")
const { specialAuthMiddleware, specialAuthMiddlewareForAdmins, authMiddleware } = require('../protection')

const router = express.Router();


 
router.get('/students',  async (req, res) => {
    try {
        const GetStudents = await SchemaStudent.find({});
        console.log("These are your students:", GetStudents);
        console.log(req.userClass); // Access user's class
        console.log(req.userRole);
        res.status(200).json({ GetStudents })
    } catch (error) {
        console.error('error getting your students', error)
        res.status(500).json({ success: false, message: "error getting your students' data", error: error.message })
    }


})


router.get('/students/class/:class', async (req, res) => {
    try {
        const { class: studentClass } = req.params;
        const students = await SchemaStudent.find({ class: studentClass });
        res.json(students);
    } catch (error) {
        console.error('Error fetching students by class:', error);
        res.status(500).json({ error: 'Failed to fetch students' });
    }
});

router.get('/students/search', async (req, res) => {
    try {
        const { name, class: studentClass } = req.query;
        let query = {};

        if (name) {
            query.name = { $regex: new RegExp(name, 'i') }; // Case-insensitive search
        }

        if (studentClass) {
            query.class = studentClass;
        }

        const students = await SchemaStudent.find(query);
        res.json(students);
    } catch (error) {
        console.error('Error searching students:', error);
        res.status(500).json({ error: 'Failed to search students' });
    }
});


router.get('/getTeachers', async (req, res) => {
    try {
        const allTecahers = await Teacher.find({});



        console.log('Data retrieved successfully:', allTecahers);
        res.status(200).json({ allTecahers });
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ success: false, message: 'Error retrieving data', error: error.message });
    }
});


router.get('/getAdmins', async (req, res) => {
    try {
        const allAdmins = await Admin.find({});



        console.log('Data retrieved successfully:', allAdmins);
        res.status(200).json({ allAdmins });
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ success: false, message: 'Error retrieving data', error: error.message });
    }
});


router.get('/students/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await SchemaStudent.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/teachers/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Teacher.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;