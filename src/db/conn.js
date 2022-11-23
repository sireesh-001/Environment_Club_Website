const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://environment:0WVgJMYJEyQJftwW@cluster0.odfxqev.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,   
    useUnifiedTopology: true,
    useCreateIndex:true

}).then(()=>{
    console.log("Connection established succesfully");
}).catch(()=>{console.log("error in establishing connection");})

