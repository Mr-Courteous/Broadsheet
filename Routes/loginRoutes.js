const express = require('express');
const Admin = require('../Models/adminSchema');
const Teacher = require('../Models/TeacherSchema');
const Student = require("../Models/studentSchema")
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { specialAuthMiddleware, specialAuthMiddlewareForAdmins, authMiddleware } = require('../protection')


const router = express.Router();



router.post('/studentLogin', async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Student.findOne({ email });

        if (!admin) {
            return res.status(401).json({ message: 'Invalid email address or password' });
        }

        const isMatch = await bcryptjs.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({
            userId: admin._id, email: admin.email, name: admin.name, class: admin.class
        },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message:"Login successfull",
            token,
            user: {
                id: admin._id,
                email: admin.email,
                name: admin.name
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/teacherLogin', async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Teacher.findOne({ email });

        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcryptjs.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({
            userId: admin._id, email: admin.email, role: admin.position, name: admin.name, class: admin.class
        },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message:"Login successfull",
            token,
            user: {
                id: admin._id,
                email: admin.email,
                name: admin.name
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


router.post('/adminLogin', async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcryptjs.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({
            userId: admin._id, email: admin.email, role: admin.position, name: admin.name, class: admin.class
        },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            token,
            user: {
                id: admin._id,
                email: admin.email,
                name: admin.name,
                role: admin.position
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});





// router.get('/Studentprofile', async (req, res) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1]; 
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); 
//     const userId = decoded.userId; // Extract userId from decoded token

//     const user = await Student.findById(userId); 

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Option 1: Send only public profile information
//     const { name, email, role } = user; 
//     res.json({ name, email, role });

//     // Option 2: Send full profile information (be mindful of security)
//     // res.json(user); 

//   } catch (error) {
//     console.error('Error fetching user profile:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

module.exports = router;