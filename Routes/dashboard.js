const express = require('express');
const jwt = require('jsonwebtoken');
const Student = require('../Models/studentSchema');

const router = express.Router();

router.get('/studentProfile', async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const expirationTime = decoded.exp;
    const currentTime = Math.floor(Date.now() / 1000);



    if (expirationTime < currentTime) {
      return res.status(401).json({ message: 'Token has expired' });
    }
    const userId = decoded.userId;

    const user = await Student.findById(userId)
      .select('class phoneNumber email address parentOrGuardianName parentOrGuardianNumber emergencyContact admissionYear profilePicture dateOfBirth ');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);

  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;