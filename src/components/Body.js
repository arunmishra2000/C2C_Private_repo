import React from "react";
import Image from "./Hero-Image.gif";
import Banner from "./assets/svg/wave (10).svg";

function Body() {
  return (
    <section id="hero-section">
      <div className="container-fluid-hero">
        <div className="row">
          <div className="col-lg-6 hero-intro">
            <h1>
              Empowering mankind towards sustainability with Carbon Credits
              <span>.</span>
            </h1>
            <p>
              Earn, Live and Donate. Let's break the boundaries and become
              global citizens! <br /> Be a part of Sustainable Living and Earn
              your Carbon Credits. Donate it, Exchange it with money and all the
              possible resources. We've got you covered!
            </p>
            <br />
            <a href="#go-here">
              <button className="btn btn-lg cta">Learn More</button>
            </a>
          </div>
          <div className="col-lg-6 hero-image pt-5 pl-5">
            <img
              className="image-fluid .d-none .d-lg-block .d-xl-none image-width"
              src={Image}
              alt="abc"
            />
          </div>
        </div>
      </div>
      <img className="hero-wave" src={Banner} alt="hero-wave" />
    </section>
  );
}

export default Body;
