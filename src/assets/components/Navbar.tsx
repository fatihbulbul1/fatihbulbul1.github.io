import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="container p-2 d-flex justify-content-between align-items-center">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
};
