const express = require("express");
const todoCont = require("./controller/todo.cont");
const app = express();
app.use(express.json());
app.use("/todos", todoCont);
module.exports = app;
