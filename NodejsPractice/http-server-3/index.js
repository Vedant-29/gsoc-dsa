// const express = require("express");
// const app = express();

// app.get("/health-checkup", function(req, res) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = parseInt(req.query.kidneyid, 10); // Ensure kidneyId is an integer

//     if (username === "vedant" && password === "pass") {
//         if (kidneyId === 1 || kidneyId === 2) {
//             return res.json({
//                 msg: "Your kidney is mad good!"
//             });
//         }
//     }

//     res.status(400).json({"msg": "Something wrong with input"});
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send("you have " + kidneyLength + " kidneys");
});


// Error handling error middleware -- Globale middleware
app.use(function(err,req,res,next) {
    res.json({
        msg: "Something is wrong with your input"
    })
})

app.listen(3000);
