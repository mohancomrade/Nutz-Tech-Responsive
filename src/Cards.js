import React from "react";
import "./Card.css";
export default function cards() {
  return (
    <div className="display-cards">
      <h2
        style={{  
          textAlign: "center",
          fontSize: "32px",
          fontFamily: "sans-serif",
        
        }}
      >
        What We Do
      </h2>
      <div className="all-cards">
        <div className="single-cards">
          <img src="https://nutz.in/assets/feather/pen-tool.svg"></img>
          <h3>Graphic design</h3>
          <div className="know-more">Know more</div>
        </div>
        <div className="single-cards">
          <img src="https://nutz.in/assets/feather/code.svg"></img>
          <h3>Web Development</h3>
          <div className="know-more">Know more</div>
        </div>
        <div className="single-cards">
          <img src="https://nutz.in/assets/feather/smartphone.svg"></img>
          <h3>App Development</h3>
          <div className="know-more">Know more</div>
        </div>
        <div className="single-cards">
          <img src="https://nutz.in/assets/feather/trending-up.svg"></img>
          <h3>Digital Marketing</h3>
          <div className="know-more">Know more</div>
        </div>
        <div className="single-cards">
          <img src="https://nutz.in/assets/feather/shield.svg"></img>
          <h3>Ethical Hacking</h3>
          <div className="know-more">Know more</div>
        </div>
        <div className="single-cards">
          <img src="https://nutz.in/assets/feather/book-open.svg"></img>
          <h3>Training</h3>
          <div className="know-more">Know more</div>
        </div>
      </div>
    </div>
  );
}

