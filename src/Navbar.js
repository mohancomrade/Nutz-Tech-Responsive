import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
     <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "#fff" }}
      >
        <img
          src="data:image/png;base64,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"
          className="img-fluid"
          alt="nutz-logo"
        />
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
               
              <li className="nav-item">
                
                <a className="nav-link" id="nav-contact" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;
