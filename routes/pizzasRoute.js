const express = require("express");
const router = express.Router();
const Pizza = require('../models/pizza');


router.get("/getallPizzas", async(req , res ) => {

    try{
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    
    } catch (error) {
        return res.status(400).json({ message : error });
    }

    
});

module.exports = router;


