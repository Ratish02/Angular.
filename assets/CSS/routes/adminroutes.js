const router = require("express").Router()

const Student = require('../studentModel')
 
router.get("/",function(req,res){
    res.json({
        status:200,success:true,message:"Welcome to Router"
    })
})

router.post("/addUser",(req,res)=>{
    let data = {
        name:req.body.name,
        age:req.body.age,
        phone:req.body.phone
    }
    const stuObj  =  new Student(data)
    stuObj.save()
    .then(data=>{
        res.json({
            status:200,success:true, message:"User Added Successfully",
            data:data
        })
    })
    .catch(err=>{
        res.json({
            status:400,success:false, message:"Error in add User",
            err:err
        })
    })
   
})

router.post("/getallusers",function(req,res){
    Student.find(req.body).exec()
    .then(data=>{
        res.json({
            status:200,success:true, message:"User loaded",
            data:data
        })
    })
    .catch(err=>{
        res.json({
            status:400,success:false, message:"Error in fetching User data",
            err:err
        })
    })
})

router.get("/allusers",function(req,res){
    res.json({
        status:200,success:true, message:"All Users",
    })
})
router.get("*",function(req,res){
    res.json({
        status:404,success:false,message:"Page Not Found"
    })
})


module.exports = router