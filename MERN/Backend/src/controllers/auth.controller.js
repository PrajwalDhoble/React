require("dotenv"),config();
const jwt =require("jsonwebtoken")
const Admin=require=("../models/admin.model")

const newToken=(admin)=>{
    return jwt.sign({admin},process.env.JWT_SECRET_KEY);
};

const login=async(req,res)=>{
    try{
        const admin=await Admin.findOne({email:req.bpdy.email});

        if(!admin)
        return res
        .status(400)
        .send({message:"incorrect"})

        if(!match)
        return res
        .status(400)
        .send({message:"incorrect"})

        res.send({user,token});
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports=login;