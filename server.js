'use strict';
const express = require("express");
// const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
app.set('trust proxy', true);

app.get("/getjson", function(req, res) {   
    res.json({test: "OK"});
});


if (process.env.NODE_ENV === "production") {
    app.use(express.static("./build"));
    app.get("/*", function(req, res) {   
        res.sendFile("./build/index.html");
    });
}


app.listen(PORT, () => console.log(`🌎 ==> Server now on running port ${PORT}!`));