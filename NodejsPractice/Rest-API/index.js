// Note taking backend REST API logic - using node js
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3002;

app.use(bodyParser.json());

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

app.get("/todos", (req, res) => {
  // Basically the function below would run when the file read is complete.
  // Giving status of error or data -- of the file read.
  fs.readFile("todo.json", "utf-8", function (err, data) {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("todo.json", "utf-8", function (err, data) {
    if (err) throw err;
    const id = parseInt(req.params.id);
    const todos = JSON.parse(data);
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(400).json({
        message: "Message not found",
      });
    }
  });
});

app.post("/todos", (req, res) => {
  fs.readFile("todo.js", "utf-8", function (err, data) {
    if (err) throw err;
    const num = Math.floor(Math.random() * 10);
    const todos = JSON.parse(data);
    const sameNum = todos.find((todo) => todo.id === num);

    if (!sameNum) {
      todos.push({
        id: num,
        name: req.body.name,
        description: req.body.description,
        completed: req.body.completed,
      });
      fs.writeFile(
        "todo.json",
        JSON.stringify(todos, (err) => {
          if (err) throw err;
          res.status(201).json({
            id: num,
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed,
          });
        })
      );
    } else {
      console.log("Todo with the same id already exists");
    }
  });
});

app.put("/todos/:id", (req, res) => {
  fs.readFile("todo.json", "utf-8", function (err, data) {
    if (err) throw err;
    const id = parseInt(req.params.id);
    const todos = JSON.parse(data);
    const changingTodo = todos.find((todo) => todo.id === id);

    if (changingTodo) {
      changingTodo.name = req.body.name;
      changingTodo.description = req.body.description;
      changingTodo.completed = req.body.completed;
      res.status(200).json(todos);
      fs.writeFile(
        "todo.json",
        JSON.stringify(todos, (err) => {
          if (err) throw err;
          res.status(200).json(changingTodo);
        })
      );
    } else {
      res.status(404).json({
        messgae: "Todo with the given id doesnt exist",
      });
    }
  });
});

app.delete("/todos/:id", (req, res) => {
  fs.readFile("todo.json", "utf-8", function (err, data) {
    if (err) throw err;
    const id = parseInt(req.params.id);
    const todos = JSON.parse(data);
    const deletingTodo = todos.findIndex(todos, id);

    if (deletingTodo !== -1) {
      todos.splice(deletingTodo, 1);
      fs.writeFile("todo.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).send();
      });
      res.status(200).end();
    } else {
      res.status(404).json({
        message: "Todo with the given id doesnt exist",
      });
    }
  });
});

app.listen(port, () => {
  console.log("Listening on port http://localhost:3002");
});
