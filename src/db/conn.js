const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/EC",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true

}).then(()=>{
    console.log("Connection established succesfully");
}).catch(()=>{console.log("error in establishing connection");})