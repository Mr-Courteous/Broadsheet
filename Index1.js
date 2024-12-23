const express = require('express')
const connectDB = require('./connection');
const cors = require('cors');
const getRoute = require ('./Routes/getRoutes');
const postRoute = require ('./Routes/postRoutes');
const putRoute = require ('./Routes/putRoutes');
const deleteRoute = require('./Routes/deleteRoutes');





const app = express()

connectDB()


app.use(express.json()); -

  app.use(cors());


app.use(getRoute); 
app.use(postRoute);
app.use(putRoute);
// app.use(deleteRoute);








const port = 5000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  