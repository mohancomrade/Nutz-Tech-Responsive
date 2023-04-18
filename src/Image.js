import React, { useRef, useEffect } from "react";
import "./Image.css";

const Image = () => {
  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  const parallax = (event) => {
    document.querySelectorAll(".layer").forEach((shift) => {
      const position = shift.getAttribute("data-speed");
      const x = (window.innerWidth - event.pageX * position) / 30;
      const y = (window.innerHeight - event.pageY * position) / 30;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img
              src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer01.svg"
              data-speed="-0.5"
              alt=""
              className="layer img-fluid"
            />
            <img
              src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer02.svg"
              data-speed="0.5"
              alt=""
              className="layer img-fluid"
            />

            <img
              src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer04.svg"
              data-speed="0.5"
              alt=""
              className="layer img-fluid"
            />

            <img
              src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer05.svg"
              data-speed="0.2"
              alt=""
              className="layer img-fluid"
            />

            <img
              src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer06.svg"
              data-speed="0.6"
              alt=""
              className="layer img-fluid"
            />

            <img
              src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer07.svg"
              data-speed="0.8"
              alt=""
              className="layer img-fluid"
            />

            <img
              src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer08.svg"
              data-speed="-0.2"
              alt=""
              className="layer img-fluid"
            />

            <img
              src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer09.svg"
              data-speed="0.4"
              alt=""
              className="layer img-fluid"
            />

            <img
              src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer10.svg"
              data-speed="-0.9"
              alt=""
              className="layer img-fluid"
            />

            <img
              src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer11.svg"
              data-speed="0.6"
              alt=""
              className="layer img-fluid"
            />

            <img
              src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer12.svg"
              data-speed="-0.7"
              alt=""
              className="layer img-fluid"
            />

     <img
        src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer13.png"
        data-speed="-0.5"
        alt=""
        className="layer img-fluid"
      />

      
<img
        src="https://nutz.in/assets/img/demo/creative-agency/parallax/layer14.svg"
        data-speed="0.5"
        alt=""
        className="layer img-fluid"
      />
      </div>
      </div>
</div>
</section>
  )
}

export default Image;
