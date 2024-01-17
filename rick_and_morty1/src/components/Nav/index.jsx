import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";


const Nav = ({onSearch}) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Link className={Link} to='/about'> About </Link>
      <Link className={Link} to='/home'> Home </Link>
    </div>
  );
};

export default Nav;
