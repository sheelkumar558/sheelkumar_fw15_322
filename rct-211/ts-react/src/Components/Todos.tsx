import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import TodosInput from "./TodosInput";
import TodosItem from "./TodosItem";

export interface ITodosItems{
    id:number;
    title:string;
    status:boolean
}

const Todos = () => {
  const [todos, setTodos] = useState<ITodosItems[]>([]);
  const handleAdd = (title: string) => {
    const payload = {
      title,
      status: false,
      id: todos.length + 1,
    };
    //setTodos([...todos, payload]);
    axios.post(" http://localhost:8080/todos",payload)
    .then(getTodos);
  };
  const getTodos=()=>{
    axios.get(" http://localhost:8080/todos")
    .then(({data}:{data:ITodosItems[]})=>{
     
        setTodos(data);
    })
  };
  useEffect(()=>{
    getTodos();
  },[]);
  return (
    <div>
      <Header label="Todos" />
      <TodosInput onClick={handleAdd}/>
      {
        todos.length > 0 && todos.map((item)=>{
         return <TodosItem key={item.id}  {...item}/>
        })
      };
    </div>
  );
};

export default Todos;
