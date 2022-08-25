const mongoose = require ("mongoose");

const pizzaSchema = mongoose.Schema(
    {

    name :{
        type: String,
        require
    },
    variants : [],
    prices: [],
    category: {
        type: String,
        require
    },
    image: {
        type: String,
        require
    },
    description: {
        type: String,
        require
    }, 
    
} , {
        timestamps: true,
    })


    module.exports = mongoose.model("Pizza", pizzaSchema);