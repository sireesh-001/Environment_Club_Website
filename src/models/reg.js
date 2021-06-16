const mongoose = require ("mongoose");
//reg

const RegSchema = new mongoose.Schema(

    {
        rfirstname:{type:String},
        rlastname: {type:String},
        rmail: {type:String},
        Contact:{type:String},
        batch: {type:String},
        event:{type:String},
        suggestions:{type:String},
    
    }
)
const Register = new mongoose.model("Registeration Data",RegSchema);
module.exports = Register;


