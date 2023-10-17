const express = require('express');
const app = express();

// three ways to send data from client to server
                            // http-data : when client send data it goes through http, it converts data to http data. 
app.use(express.json());   // middleware: used to convert http data to json data

app.post('/add', (req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    const sum = num1 + num2;

    res.status(200).send({sum})
})

app.get('/substract/:num1/:num2', (req,res)=>{
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    const diff = num1 - num2;

    res.status(200).send({diff})
})

app.get('/multiply', (req,res)=>{
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const product = num1 * num2;

    res.status(200).send({product})
})

app.post('/divide/:num1', (req,res)=>{
    const num1 = Number(req.params.num1);
    const num2 = req.body.num2;
    
    if( num2 === 0){
        return res.status(400).send({message: "Denominator cannot be 0"})
    }

    const result = num1 / num2;

    res.status(200).send({result})
})

app.listen(8001, ()=>{
    console.log('server running', 8001);
})