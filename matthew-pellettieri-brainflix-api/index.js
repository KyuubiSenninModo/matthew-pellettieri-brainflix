const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const cors = require('cors');
const router = require('./routes/videos');
app.use(express.static('public'));
require('dotenv').config();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

app.use(cors());
app.use('/videos', router);



app.listen(port, () => console.log(`Listening on ${port}`));