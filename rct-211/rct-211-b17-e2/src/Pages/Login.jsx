import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { login } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
const Login = () => {
  
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((r)=>{
         if(r.type === 'LOGIN_SUCCESS'){
          navigate("/");
         }
      });
    }
  };
  return (
    <div>
      <h2>LOGIN</h2>
      <LoginWraper>
        <form onSubmit={handleSubmit}>
          <div>
            <label>User Email</label>
            <br />
            <input
             data-cy="login-email"
             type='email'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
          </div>
          <div>
            <label>User Password</label>
            <br />
            <input
             data-cy="login-password"
             type='password'
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             
              />
          </div>
          <button type="submit" data-cy="login-submit">
            Loading
          </button>
        </form>
      </LoginWraper>
    </div>
  );
};

export default Login;

const LoginWraper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
