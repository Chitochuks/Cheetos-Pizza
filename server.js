const express = require("express");
const app = express();
const db = require("./db");
const Pizza = require("./models/pizza");
const pizzasRoute = require('./routes/pizzasRoute');



app.use(express.json());

app.use('/api/pizzas/' , pizzasRoute)


app.get("/", (req, res) => {
    res.send("Server working");
});




const port = process.env.PORT || 8000;

app.listen(port, () =>  `Server running on ${port}`)