import React from "react";
import logo from "../img/freecodecamp-logo.png";


const Logo = ()=>{
    return(
    <div className="freecodecamp-logo-contenedor">
    <img
      src={logo}
      alt="logo de aplicacion"
      className="freecodecamp-logo"
    />
  </div>
    )
};

export default Logo;