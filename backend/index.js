const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 5000 || process.env.PORT;

// connect to database 

const URI = "mongodb+srv://quizapp:quizapp@cluster0.0eh4p.mongodb.net/crud?retryWrites=true&w=majority"

mongoose.connect(URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`)
    })
}).catch((err)=>{
    console.log(err)
});