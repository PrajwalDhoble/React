require("dotenv").config();
const jwt = require("jsonwebtoken");
const Admin = require("../models/manager.model");

const newToken = (admin) => {
  return jwt.sign({ admin }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let admin = await Admin.find({ email: req.body.email }).lean().exec();
    console.log(admin);

    if (admin) {
      return res.status(400).send({ message: "Plz try another email" });
    }
    admin = await Manager.create(req.body);
    const token = newToken(admin);

    res.send({ admin, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login = async (req,res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email })
     
    if (!admin) {
      return res.status(400).send({ message: "invalid credentials!" });
    }
    const passw = admin.checkPassword(req.body.password);
    if (!passw) {
      return res.status(400).send({ message: "password is too common!" });
    }
    const token = newToken(admin);
    res.send({admin,token});
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { register, login};