const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.join(__dirname, 'public/')
app.use(express.static(publicPath));


const port = process.env.PORT || 1998 ;
const listenCallback = () => { console.log("server is running") }
const server = app.listen(port,listenCallback);


app.get("/", function (req, res) {
    let dir = path.resolve(__dirname, "./src/views/index.html");
    res.sendFile(dir)
})

app.get("/register", function (req, res) {
    let dir = path.resolve(__dirname, "./src/views/register.html");
    res.sendFile(dir)
})
