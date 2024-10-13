require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const productRoutes=require('./routes/productRoutes');

const app =express();

//middlware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/products',productRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('Connected to db & Listening on port',process.env.PORT);
    })
})
.catch((error)=>{
    console.log(error)
})