// dbConnection.js

const mongoose = require('mongoose');

// Replace the following with your MongoDB Atlas connection string
// const atlasConnectionUri ='mongodb+srv://Courteous:mongokey@cluster0.qiuqa3p.mongodb.net/NewData?retryWrites=true&w=majorityyour_mongodb_atlas_connection_string';
const connect = 'mongodb+srv://Courteous:mongokey@cluster0.qiuqa3p.mongodb.net/NewData?retryWrites=true&w=majority'


// Connect to MongoDB Atlas using Mongoose
mongoose.connect(connect, { useNewUrlParser: true, useUnifiedTopology: true });

// module.exports = mongoose;
