'use strict';
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("./build"));
    app.get("/*", function(req, res) {   
        res.sendFile(path.join(__dirname, "./build/index.html"));
    });
}

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on running port ${PORT}!`);
});