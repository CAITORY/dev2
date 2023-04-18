const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/topic', (req, res) => {
    res.send({ name : "topic test" })
})

let corsOptions = {
  origin: "*", 
  credential: true, 
};

app.use(cors(corsOptions));
app.listen(port, () => console.log(`Listening on port ${port}`))
