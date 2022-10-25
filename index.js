const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const cetegory = require("./data/course.json");
const allCetegoryData = require("./data/courseDetails.json");

app.get("/", (req, res) => {
    res.send({})
})

app.get("/category", (req, res) => {
    res.send(cetegory);
})


app.get("/category/:name", (req, res) => {
    const name = req.params.name;
    const cetegoryItems = allCetegoryData.filter((p) => p.category == name);
    res.send(cetegoryItems);
})


app.get("/category/:name/:id", (req, res) => {
    const id = req.params.id;
    const singleItem = allCetegoryData.find((p) => p.uid == id);
    res.send(singleItem);
})


app.listen(Port, () => {
    console.log('server is running:', Port);
});

module.exports = app;