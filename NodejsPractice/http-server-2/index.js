const express = require("express");
const app = express();

var users = [
  {
    name: "Vedant",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const kidney = users[0].kidneys;
  const kidneyCount = kidney.length;
  const kidneyHealthy = kidney.filter((kidney) => kidney.healthy).length;
  const unhealthyKidneys = kidney.filter((kidney) => !kidney.healthy).length;
  res.json({
    kidneyCount,
    kidneyHealthy,
    unhealthyKidneys
  })
});

app.post("/", function (req, res) {
    const isKidneyHealthy = req.body.isKidneyHealthy;
    users[0].kidneys.push({
        healthy: isKidneyHealthy
    })
    res.json({
        msg: "Kidney adding completed!",
        users
    })
});

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        users
    })

});
app.delete("/", function (req, res) {});

app.listen(3000);
