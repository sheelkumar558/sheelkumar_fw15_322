import React from "react";
const Navbar = () => {
  return (
   <>
    <div style={{display:'flex',justifyContent:'space-between'}}>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>
      {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
     <a href='Login'>
     <button data-cy="navbar-login-button">Login</button>
    </a>
    
   </div>
   </>
  );
};

export default Navbar;
