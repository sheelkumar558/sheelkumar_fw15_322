import React from 'react'
import { Route, Routes } from "react-router-dom";
import Admin from './Admin';
import Books from './Books';
import EditBooks from './EditBooks';
import SingleBooks from './SingleBooks';
const MainRoutes = () => {
  return (
     <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<SingleBooks />} />
        <Route path="/books/:id/edit" element={<EditBooks />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes> 
  )
}

export default MainRoutes;

