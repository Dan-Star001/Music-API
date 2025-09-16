const express = require('express')
const app = express();
const cors = require('cors')
const songRoute = require('./routes/song.route')
const dotenv = require('dotenv')
dotenv.config();



// Use the cors middleware
app.use(cors());


app.use('/', songRoute)




const port = process.env.port
app.listen(port, ()=> {
    console.log(`Port Started at ${port}`);
})

