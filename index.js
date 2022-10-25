const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const cetegory = require("./data/course.json")

app.get("/", (req, res) => {
    res.send({})
})

app.get("/cetegory", (req, res) => {
    res.send(cetegory);
})
app.listen(Port, () => {
    console.log('server is running:', Port);
});