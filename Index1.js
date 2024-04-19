const express = require('express')
const connectDB = require('./connection');
const Student = require('./Models/studentSchema');
const cors = require('cors');

const app = express()

connectDB()

app.use(express.json());

app.use(cors());


// app.get('/fetch-posts', async (req, res) => {
//   try {
//     // Use Mongoose connection object to access the "posts" collection directly
//     const collection = mongoose.connection.db.collection('schls');

//     // Fetch all documents from the "posts" collection
//     const posts = await collection.find({}).toArray();

//     res.json(posts);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

app.get('/getStudents', async (req, res) => {
  try {
    // Retrieve all students from the 'students' collection
    const students = await Student.find({});

    console.log('Data retrieved successfully:', students);
    res.status(200).json({ students });
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ success: false, message: 'Error retrieving data', error: error.message });
  }
});

// success: true, message: 'Data retrieved successfully', data: students


app.get('/data/:id', async (req, res) => {
  const id = req.params.id;
  try {
      const data = await Student.findById(id);
      if (!data) {
          return res.status(404).json({ message: 'Data not found' });
      }
      res.json(data);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});


app.post('/addStudents', async (req, res) => {
  try {
    // Sample student data
    const userData = {
      name: req.body.name,
      age: req.body.age,
      class: req.body.class,
      subjects: req.body.subjects,
      // Add other fields as needed
    };

    // Create a new student document
    const newUser = new Student(userData);

    // Save the document to the 'students' collection
    await newUser.save();

    console.log('Data inserted successfully:', newUser);
    res.status(200).send('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ success: false, message: 'Error inserting data', error: error.message });
  }
});


app.put('/editStudent/:id', async (req, res) => {
  const id = req.params.id;
  const file = {
  name: req.body.name,
  age: req.body.age,
  class: req.body.class,
  subjects: req.body.subjects,
  }
});







const port = 5000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  