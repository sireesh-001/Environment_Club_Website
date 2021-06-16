const mongoose = require ("mongoose");
// Donate Schema
const donationSchema = new mongoose.Schema(

    {
        firstname:{type:String},
        lastname: {type:String},
        mail: {type:String},
        Inspiration: {type:String},
        checkbox:{type:String},
        name:{type:String},
        cardnumber:{type:String},
        exdate:{type:String},
        cvv:{type:String, password:true},
        contactno:{type:String},
        amount:{type:String},
        upi:{type:String},
        transacid:{type:String},


    }
)

const Donate = new mongoose.model("Donation Data",donationSchema);
module.exports = Donate;

