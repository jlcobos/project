'use strict';
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.set('trust proxy', true);

if (process.env.NODE_ENV === "production") {
    app.get("/*", function(req, res) {   
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}


app.listen(PORT, () => console.log(`🌎 ==> Server now on running port ${PORT}!`));