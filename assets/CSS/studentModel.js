const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{ type:String,default:""},
    age:{ type:Number,default:0},
    phone:{ type:Number},

    createdAt:{type:Date, default:Date.now()}

})

module.exports = mongoose.model("student",studentSchema)