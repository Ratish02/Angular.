const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/davietstu")
.then(obj=>{
    console.log("DB Connected")
})
.catch(err=>{
    console.log("Error in DB connection",err)
})

app.get("/",function(req,res){
    res.json({
        status:200,success:true, 
        message:"Welcome to First API"
    })
})

app.get("/sum2/:x/:duja",(req,res)=>{
    valueis = req.params.x
    valueis2 = req.params.duja
    res.json({
        status:200,success:true,
        message:"Sum2 Called",
        valueis:valueis,
        dujais:valueis2
    })
})

app.post("/getValue",(req,res)=>{
    console.log(req.body)
    res.json({
        status:200,success:true,
        message:"Post Method Body Data",
        youenter: req.body
    })
})

const adminroutes = require('./routes/adminroutes.js')
app.use("/admin",adminroutes)


app.listen(3001,function(){
    console.log("Server Runnning At 3001")
})