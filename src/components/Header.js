
import React from "react";

function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Hiroaki Arai</span>
        

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                href="#AboutMe"
                onClick={() => handlePageChange("AboutMe")}
                className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Contact"
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Resume"
                onClick={() => handlePageChange("Resume")}
                className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
              >
                Resume
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Header;
