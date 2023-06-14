import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mt-4 mx-auto">
      <h1 className="text-4xl text-center font-semibold mb-4">Web - Calc</h1>
      <ul className="flex text-center gap-10 font-medium">
        <Link to="/">
          <li className="hover:scale-105 active:scale-100">Home</li>
        </Link>
        <Link to="/about">
          <li className="hover:scale-105 active:scale-100">About</li>
        </Link>
        <Link to="/contact">
          <li className="hover:scale-105 active:scale-100">Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;