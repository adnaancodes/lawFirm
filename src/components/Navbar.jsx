import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="companyName">
        <img src="https://img.icons8.com/cotton/64/000000/courthouse.png" />
        <h3>KNOLL & WALTERS LLP</h3>
      </div>
      <div className="bars">
        <ul>
          <li>
            <a href="/#homes">HOME</a>
          </li>
          <li>
            <a href="/#practice">PRACTICE AREAS</a>
          </li>

          <li>
            <a href="/#vision">OUR VISION</a>
          </li>
          <li>
            <a href="/#attorneys">ATTORNEYS</a>
          </li>
          <li>
            <a href="/#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
