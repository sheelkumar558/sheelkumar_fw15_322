import React from "react";
import { Route, Routes } from "react-router-dom";
import Todos from "../Components/Todos";
import SingleTodo from "./SingleTodo";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/:id" element={<SingleTodo />} />
    </Routes>
  );
};

export default MainRoutes;
