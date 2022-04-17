const mongoose =require("mongoose");

const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://prajwal:<password>@cluster0.b0wgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
            )
};
module.exports=connect