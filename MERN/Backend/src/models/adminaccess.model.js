const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");

const accessSchema = new mongoose.Schema({
    
        Grade:{type:String,required:true},
        Section:{type:String,required:true},
        Subject:{type:String,required:true},
    classes:[{
       type:mongoose.Schema.Types.ObjectId, ref:"Teacher",required:true
    }]
},{
    versionKey:false,
    timestamps:true,
});

module.exports = mongoose.model("Adminaccess",accessSchema)