const mongoose = require("mongoose");


var db = mongoose.connection

    mongoose.connect(process.env.mongoURL, {useUnifiedTopology:true, useNewURLParser:true });

    db.on('connected' , () => {
        console.log('Mongo DB Connection Successful');
    
    })
    
    db.on('error', () => {
        console.log('Mongo DB Connection Failed');
    })


module.exports = mongoose