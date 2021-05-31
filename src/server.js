import express from 'express';
import {peoples} from './people';
let app=express();


app.get("/hello",(req,res)=>{
    res.send("Hello!");
})

app.get("/people",(req,res)=>{
    res.json(peoples);
})
app.get("/people/:name",(req,res)=>{
    let {name}=req.params
    let temppeoples=peoples.filter(item=>item.name.includes(name))
    res.json(temppeoples);
})

app.listen(3000,()=>{
    console.log("successfully listenting on port 3000")
});