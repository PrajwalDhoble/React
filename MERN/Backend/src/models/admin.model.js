const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");

const adminSchema = new mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true,
});

    adminSchema.pre("confirm", function(next){
    if(!this.isModified("password"))return next(); 
    var encryp = bcrypt.hashSync(this.password,6)
    this.password = encryp;
    return next();

});
    adminSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Admin",adminSchema)