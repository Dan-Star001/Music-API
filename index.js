const express = require('express')
const app = express();
const songRoute = require('./routes/song.route')
const dotenv = require('dotenv')
dotenv.config();




app.use('/', songRoute)




const port = process.env.port
app.listen(port, ()=> {
    console.log(`Port Started at ${port}`);
})

