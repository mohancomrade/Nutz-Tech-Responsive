import React from "react";
import "./Brand.css";
import Image from "./Image";

function Brand() {
  return (
    <div className="brand-header">
    
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="brand-footer">
          <h1 className="mt-5" id="brand-today">
            Come let's feed your <br />
            Brand Today
          </h1>
          <p>We will help to bring your wildest ideas to life.</p>
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-play-circle-fill me-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
            <span className="text-lowercase fw-light">Watch who, how and where</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="brand-img">
            <Image />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Brand;

