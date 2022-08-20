import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </div>
      <div
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </div>
      <div
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </div>
      <div
        onClick={() => {
          navigate("/employees");
        }}
      >
        Employees
      </div>
    </div>
  );
};