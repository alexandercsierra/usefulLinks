import React from "react";
import {NavLink} from 'react-router-dom'

const Nav = (props) => {
  const {setUnit} = props;
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/unit1" onClick={()=>{setUnit("unit1")}}>Unit 1</NavLink>
        <NavLink to="/unit2" onClick={()=>{setUnit("unit2")}}>Unit 2</NavLink>
        <NavLink to="/unit3" onClick={()=>{setUnit("unit3")}}>Unit 3</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
