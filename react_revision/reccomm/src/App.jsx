import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Employee } from "./Components/Employee";
import { CreateEmployee } from "./Components/CreateEmployee";
import { EmployeeDetails } from "./Components/EmployeeDetails";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/employees/create" element={<CreateEmployee />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
      </Routes>
    </div>
  );
}

export default App;