// src/api.js
const express = require("express");
const app = express();
const greeting = require("./greeting");
const port = 3000;



app.get("/greeting/:name", (req, res) => {
    // Fill in your code that:  
    // 1. set's the status code to 200  
    // 2. and returns an object with the greeting
    var name = req.params.name;
    var retgreeting = greeting(name);
    res.send(retgreeting);
    res.sendStatus(200);
    

});

module.exports = app;