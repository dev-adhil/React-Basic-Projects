import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"

export const Haeder = () => {

  const [btnNameReact, setNameReact] = useState("Login")

  return (
    <div className="header">
      <div className="logo">
        <div className="logo-container">
          <img
            className="logo"
            src = {LOGO_URL}
            alt="logo"
          />
        </div>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li> <a href="/about">About Us</a></li>
          <li>
            <Link>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={()=>{btnNameReact == "Login"  
            ? setNameReact ("Logout") 
            :setNameReact("Login"); }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Haeder;