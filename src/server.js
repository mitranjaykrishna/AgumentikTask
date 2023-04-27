const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const path=require('path');

const app=express();
const PORT=process.env.PORT||8000;

//Http request logger

app.use(morgan('tiny'));


app.get('/api',(req,res)=>{
    const data={
        userName: 'acccc',
        age: 5
    }
    res.json(data);
})
app.get('/api/name',(req,res)=>{
    const data={
        userName: 'petr',
        age: 5
    }
    res.json(data);
})

app.listen(8000,()=>console.log(`Server is Running At ${PORT}`))