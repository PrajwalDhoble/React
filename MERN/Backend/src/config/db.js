const mongoose =require("mongoose");

const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://prajwal:prajwal_123@cluster0.j8ij4.mongodb.net/uploads?retryWrites=true&w=majority"
    )
};
module.exports=connect