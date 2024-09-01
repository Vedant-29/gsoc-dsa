const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.string().email();

const response = schema.parse("Helooworld@gmail.com");
console.log(response);


// app.use(express.json());

// app.post("/health-checkup", (req,res) => {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);

//     res.send({
//         response
//     })
// })


// app.listen(5000, () => {
//     console.log("listening on port http://localhost:5000");
// });