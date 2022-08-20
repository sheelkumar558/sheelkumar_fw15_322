import React, { useState } from "react";
import axios from "axios";
export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    discription: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    axios.post("https://hidden-reef-30308.herokuapp.com/employess",user)
    // console.log(user);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
        <input
          type="number"
          placeholder="mobile"
          onChange={(e) => {
            setUser({ ...user, mobile: e.target.value });
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setUser({ ...user, discription: e.target.value });
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};