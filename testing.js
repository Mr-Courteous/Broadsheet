const express = require ('express')
const cors = require('cors');





const app = express();

app.use(cors());



app.get('/api', (req, res) => {
    res.json({"users":["userOne", "userTwo", "userTwo"]});

});

app.listen(2000, () =>{console.log('running on port 2000')} )
 