const mongoose = require("mongoose");

//creating publication schema
const PublicationSchema = mongoose.Schema({ 
    id :Number,
    name : String , 
    books : [String] ,
});

//publication model
const PublicationModel = mongoose.model(PublicationSchema);


module.exports = PublicationModel;