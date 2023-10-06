const express = require ("express");
const app = express();
const path = require ("path")




app.listen(3030,()=>{
    console.log("servidor en linea")
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/"))
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/babbage.html"))
})


