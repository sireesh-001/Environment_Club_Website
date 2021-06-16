const mongoose = require ("mongoose");
const querySchema = new mongoose.Schema(

    {
        fname: {type:String, required : true},
        lname: {type:String, required : true},
        Email: {type:String, required : true},
        Feedback: {type:String, required : true}
    }
)

const Query = new mongoose.model("Feedback/Query",querySchema);
module.exports = Query;

