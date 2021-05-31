import express from 'express';
import {peoples} from './people';
import {promises as fs} from 'fs';
import bodyParser from 'body-parser';
let app=express();

app.use(express.json());
app.use(express.urlencoded());



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

app.get('/filedata',async (req,res)=>{
let data=await fs.readFile(__dirname+'/peopledata.json');
let peoples=JSON.parse(data);
res.json(peoples);
})

app.post('/people',(req,res)=>{
let newPerson=req.body;
peoples.push(newPerson);
res.json(peoples);

})

app.listen(3000,()=>{
    console.log("successfully listenting on port 3000")
});