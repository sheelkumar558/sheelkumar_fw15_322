import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleTodos from "./SingleTodos";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo/:id" element={<SingleTodos/>} />
    </Routes>
  );
};

export default Pages;
