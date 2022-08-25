const mongoose = require("mongoose")

const mongoURL = 'mongodb+srv://ChitoChuks:15Wrto22ciPG35CT@chitos.mghlh.mongodb.net/cheetos-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewURLParser:true })

var db = mongoose.connection

db.on('connected' , () => {
    console.log('Mongo DB Connection Successful');

})

db.on('error', () => {
    console.log('Mongo DB Connection Failed');
})

module.exports = mongoose