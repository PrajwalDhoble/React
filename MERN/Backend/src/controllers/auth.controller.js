require("dotenv"),config();
const jwt =require("jsonwebtoken")
const Admin=require=("../models/admin.model")

const newToken=(admin)=>{
    return jwt.sign({admin},process.env.JWT_SECRET_KEY);
};
  
  const register = async (req, res) => {
    try {
      let admin = await Admin.find({ email: req.body.email }).lean().exec();
      console.log(admin);
  
      if (admin) {
        return res.status(400).send({ message: "plz try another email" });
      }
  
      admin = await Admin.create(req.body);
      const token = newToken(admin);
      res.send({ admin, token });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
const login=async(req,res)=>{
    try{
        const admin=await Admin.findOne({email:req.body.email});

        if(!admin)
        return res.status(400).send({message:"incorrect"})

        const right=admin.checkPassword(req.body.password)
        if(!right)
        return res.status(400).send({message:"incorrect"})
        
        const token=newToken(admin)
        res.send({admin,token});
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports={register,login,newToken};