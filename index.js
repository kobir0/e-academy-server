const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

app.get("/", (req, res) => {
    res.send("now runiing")
})
app.listen(Port, () => {
    console.log('server is running:', Port);
});