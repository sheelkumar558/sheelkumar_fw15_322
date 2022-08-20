const express = require("express");
const registerCon = require("./controller/rescon");
const loginCon = require("./controller/loginCon");
const todosCon = require("./controller/todosCon");

const app = express();

app.use(express.json());

app.use("/register",registerCon)
app.use("/login",loginCon);
app.use("/todos",todosCon);

module.exports = app;
