const express = require("express");
//const res = require('express/lib/response');
const Todo = require("../models/todos.model");
const client = require("../configs/redis");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);

    const todos = await Todo.find().lean().exec();

    // client.del("todos");
    client.set("todos",JSON.stringify(todos));


    return res.status(201).send(todo);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
      client.get("todos",async function(fetchTodos){
          if(fetchTodos){
              const todos = JSON.parse(fetchTodos);
              return res.status(200).send(todos);
          }else{
             try{ 
            const todos = await Todo.find().lean().exec();
            client.set("todos",JSON.stringify(todos));
            return res.status(200).send({todos,redis:true}); 
             }catch(err){
                return res.status(500).send({ message: err.message });  
             }
          }
      });
    //   client.set("todos");
    const todos = await Todo.find().lean().exec();

    return res.status(200).send(todos);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id).lean().exec();

    return res.status(200).send(todo);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

     const todos = await Todo.find().lean().exec();
     client.set(`todos.${req.params.id}`,JSON.stringify(todo));

     client.set("todos",JSON.stringify(todos));
    return res.status(200).send(todo);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(todo);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
