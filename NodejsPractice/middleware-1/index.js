const express = require("express");
const app = express();
let numberOfRequests = 0;

function calculateRequests(req,res,next) {
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.get("/health-checkup", calculateRequests ,(req,res) => {
    res.send("Hello world")
})

app.listen(4000, () => {
    console.log("Listening on http://localhost:4000");
});
