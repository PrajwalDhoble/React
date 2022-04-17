const express = require("express")
const Teacher = require("../models/teacher.model")

const router = express.Router()
router.post("",authenticate,async(req,res)=>{
    try{
        const teacher = await Teacher.create(req.body)
        res.send(teacher)
    }catch(err){
        res.status(500).send(err.message)
    }
})

router.get("/",async(req,res)=>{
    try{
        const sorts= req.sorts.sort 
        if(sorts===""){
            const ages = await Teacher.find().sort({age})
            res.send(ages)
        }
    }catch(err){
        res.status(500).send(err.message)
    }
})

router.get("/gender",async(req,res)=>{
    try{
        const filters = req.filters.filter
        const gender = await Teacher.find({"gender":filters}).populate("gender").lean().exec()
        res.send(gender)
    }catch(err){
        res.status(500).send(err.message)
    }
})

module.exports = router