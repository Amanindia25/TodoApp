import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-evenly z-[999] fixed top-0 w-[100%] mt-4 p-2 bg-amber-800 text-white">
      <ul className="flex gap-5">
        <Link to="/Todo">Todo App</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/LoginPage">Sign In</Link>
      </ul>
    </div>
  );
}
