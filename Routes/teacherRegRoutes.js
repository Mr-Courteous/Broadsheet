const express = require('express');
const router = express.Router();
const Teacher = require('../Models/TeacherSchema');
const bcryptjs = require('bcryptjs'); // For password hashing
const nodemailer = require('nodemailer'); // For sending emails
const crypto = require('crypto'); // For generating random codes

// Function to generate a random 6-digit verification code
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}


async function sendAdminVerificationEmail(adminEmail, teacherId, verificationCode) {
    const transporter = nodemailer.createTransport({
        // Configure your email service (e.g., Gmail, SendGrid)
        service: 'gmail',
        auth: {
            user: 'inumiduncourteous@gmail.com', 
            pass: 'okxo xjjt arfe upkw', 
        },
    });

    const verificationLink = `${process.env.FRONTEND_URL}/admin/verify-teacher/${teacherId}/${verificationCode}`;

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Teacher Registration Request',
        text: `A new teacher registration request is pending. Please click on the following link to verify the teacher: ${verificationLink}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent to admin successfully');
    } catch (error) {
        console.error('Error sending email to admin:', error);
    }
}
// Registration route with email verification

router.post('/addTeacher', async (req, res) => {
    try {
        const { name, email, password, class: teacherClass, position, phoneNumber, address, adminEmail } = req.body;

        // Check for existing user (teacher or regular user)
        const existingUser = await Teacher.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'This email is already associated with an account. Try registering with a new email.'
            });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcryptjs.hash(password, saltRounds);

        // Generate verification code
        const verificationCode = generateVerificationCode();

        // Create new teacher with temporary verification code
        const newTeacher = new Teacher({
            name,
            email,
            position,
            phoneNumber,
            address,
            class: teacherClass,
            verificationCode,
            password: hashedPassword,
            isVerified: false
        });

        // Save teacher data temporarily without verification
        await newTeacher.save({ validateBeforeSave: false });

        // Send verification email to admin
        await sendAdminVerificationEmail(adminEmail, newTeacher._id, verificationCode);

        res.status(201).json({
            message: 'Teacher registration request submitted. Please wait for admin approval.',
        });

    } catch (error) {
        console.error('Error registering teacher:', error);
        res.status(500).json({
            success: false,
            message: 'Error registering teacher',
            error: error.message
        });
    }
});

// Verification route (optional)
// router.post('/verify-teacher', async (req, res) => {
//     try {
//         const { email, code } = req.body;

//         // Find teacher by email
//         const teacher = await Teacher.findOne({ email });
//         if (!teacher) {
//             return res.status(404).json({ message: 'Teacher not found' });
//         }

//         // Verify code
//         if (teacher.verificationCode !== code) {
//             return res.status(400).json({ message: 'Invalid verification code' });
//         }

//         // Remove verification code or set verified flag (optional)
//         teacher.verificationCode = null; // Or teacher.verified = true;
//         await teacher.save();

//         res.status(200).json({ message: 'Email verified successfully' });

//     } catch (error) {
//         console.error('Error verifying teacher:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error verifying teacher',
//             error: error.message
//         });
//     }
// });

// module.exports = router;


// // Function to generate a random 6-digit verification code
// function generateVerificationCode() {
//     return Math.floor(100000 + Math.random() * 900000).toString();
// }

// Function to send email with verification link to admin


// Registration route for teachers
// Admin verification route
router.get('/admin/verify-teacher/:teacherId/:verificationCode', async (req, res) => {
    try {
        const { teacherId, verificationCode } = req.params;

        const teacher = await Teacher.findById(teacherId);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        if (teacher.verificationCode !== verificationCode) {
            return res.status(400).json({ message: 'Invalid verification code' });
        }

        teacher.isVerified = true;
        teacher.verificationCode = null; // Or teacher.verified = true;

        await teacher.save();

        res.status(200).json({ message: 'Teacher verified successfully' });

    } catch (error) {
        console.error('Error verifying teacher:', error);
        res.status(500).json({
            success: false,
            message: 'Error verifying teacher',
            error: error.message
        });
    }
});

module.exports = router;