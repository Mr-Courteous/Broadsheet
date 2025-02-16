const express = require('express')
const connectDB = require('./connection');
const cors = require('cors');
const getRoute = require ('./Routes/getRoutes');
const postRoute = require ('./Routes/postRoutes');
const putRoute = require ('./Routes/putRoutes');
const deleteRoute = require('./Routes/deleteRoutes');
const registerAndForgetPasswordRoutes = require ('./Routes/teacherRegRoutes');
const loginRoute = require ('./Routes/loginRoutes')
const forgotPasswordRoutes = require ('./Routes/forgotPasswordroutes')
const dashboard = require ('./Routes/dashboard')





const app = express()

connectDB()


app.use(express.json()); -

  app.use(cors()); 


app.use(getRoute); 
app.use(postRoute);
app.use(putRoute);
app.use(registerAndForgetPasswordRoutes)
app.use(forgotPasswordRoutes)
app.use(loginRoute);
app.use (dashboard);
// app.use(deleteRoute);



app.get('/', (req, res) => {
  res.send('Hello from Express!');
});








const port = 5000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  