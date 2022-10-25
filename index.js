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

app.get("/cetegory", (req, res) => {
    res.send(cetegory);
})
app.get("/cetegory/:id", (req, res) => {
    const id = req.params.id;
    const cetegoryItems = allCetegoryData.filter((p) => p.category == id);
    res.send(cetegoryItems);
})
app.listen(Port, () => {
    console.log('server is running:', Port);
});