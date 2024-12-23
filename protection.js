const jwt = require('jsonwebtoken');
const SchemaStudent = require("./Models/studentSchema");


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token from the header

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.user = decoded; // Attach decoded user information to the request
        next(); // Allow the request to proceed
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ message: error });
    }
};


const specialAuthMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        
        const { role } = decoded;
        const studentId = req.body.studentId;
        const studentClass = await SchemaStudent.findById(studentId);

        if (!studentClass) {
            return res.status(404).json({ message: 'Student not found' });
        }

        if (req.user.class.toString() !== studentClass.class.toString() ||role !== 'admin' ) {
            return res.status(403).json({
                message: 'Unauthorized: Teacher cannot edit students from a different class'
            });
        }

        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ message: error });
    }
};



const specialAuthMiddlewareForAdmins = (req, res, next) => {
    const authHeader = req.headers['authorization'];
  
    if (!authHeader) {
      return res.status(401).json({ message: 'Not authorized. Please, Login as an admin' });
    }
  
    const token = authHeader.split(' ')[1];
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
  
      const { role } = decoded;
  
      if (role !== 'Admin') {
        return res.status(403).json({ message: 'Unauthorized: Only admins can perform this operation' });
      }
  
      next();
    } catch (error) {
      console.error('Authentication error:', error);
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
  
  



module.exports = { specialAuthMiddleware, authMiddleware, specialAuthMiddlewareForAdmins };