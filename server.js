const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const db = require("./db");
const Pizza = require("./models/pizza");
const pizzasRoute = require('./routes/pizzasRoute');
const userRoute = require('./routes/userRoute');



app.use(express.json());

app.use('/api/pizzas/' , pizzasRoute)
app.use('/api/users/' , userRoute)
app.get("/", (req, res) => {
    res.send("Server working");
});




const port = process.env.PORT || 8000;

app.listen(port, () =>  `Server running on ${port}`)
