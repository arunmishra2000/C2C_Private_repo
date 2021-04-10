import React from "react";
import Pic from "./assets/1.svg";

function Resources() {
  return (
    <div>
      <nav id="go-to-top" class="navbar navbar-expand-lg selectDisable">
        <a class="navbar-brand" href="index.html">
          {" "}
          The New Civilisation{" "}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item navlink-border">
              <a class="nav-link px-4" href="resources.html">
                Resources
              </a>
            </li>
            <li class="nav-item navlink-border">
              <a class="nav-link px-4" href="#">
                Products
              </a>
            </li>
            <li class="nav-item navlink-border">
              <a class="nav-link px-4" href="#">
                Ideas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-4" href="login.html">
                <button class="btn login-btn">Login</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="resources">
        <div class="container-fluid-hero">
          <div class="row">
            <div class="col-lg-6 hero-intro">
              <h1>
                Community is made by all of us<span>.</span>
                <br />
              </h1>
              <p>
                And the best way to give back to the community is by sharing.
                <br />
                Exchange your Carbon Credits and get all the kinds of resources
                you can possibly think of. Now nobility towards nature will buy
                you scholarships, products, ideas and much more. Join the
                League. Live a sustainable life and help us create our future.
              </p>
              <a href="#scholarships">
                <button class="btn btn-lg resources-btn">
                  Take me to resources
                </button>
              </a>
            </div>
            <div class="col-lg-6 hero-image pt-5 pl-5">
              <img
                class="image-fluid .d-none .d-lg-block .d-xl-none image-width"
                src={Pic}
                alt="resources-hero"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="scholarships">
        <div class="container">
          <h1>Scholarships</h1>
          <ul>
            <li>
              <a target="_blank" href="https://research.adobe.com/scholarship/">
                ADOBE RESEARCH WOMEN-IN-TECHNOLOGY SCHOLARSHIP ↗️
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.brunel.ac.uk/women-in-brunel-engineering-and-computing/our-programme"
              >
                BRUNEL UNIVERSITY LONDON WOMEN IN ENGINEERING PROGRAMME ↗️
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.womentechmakers.com/scholars"
              >
                WOMEN TECHMAKERS SCHOLARS PROGRAM ↗️
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.aboutamazon.co.uk/amazon-in-the-community/amazon-in-the-community"
              >
                AMAZON WOMEN IN INNOVATION BURSARY ↗️
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.booking.com/articles/women-in-tech-at-booking.html"
              >
                BOOKING.COM WOMEN IN TECHNOLOGY ↗️
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.utwente.nl/en/education/scholarship-finder/university-of-twente-scholarship/"
              >
                UNIVERSITY OF TWENTE SCHOLARSHIPS (UTS) ↗️
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://ethz.ch/students/en/studies/financial/scholarships/excellencescholarship.html"
              >
                ETH ZURICH EXCELLENCE MASTERS SCHOLARSHIPS ↗️
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.scienceambassadorscholarship.org/"
              >
                SCIENCE AMBASSADOR SCHOLARSHIP ↗️
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.skywomenintechscholars.com/">
                SKY WOMEN IN TECHNOLOGY ↗️
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.iflexion.com/scholarship">
                IFLEXION SCHOLARSHIP PROGRAM ↗️
              </a>
            </li>
            <li>
              <a href="http://www.european-funding-guide.eu/scholarship/3250-scholarship-foreign-students">
                WARSAW UNIVERSITY OF TECHNOLOGY SCHOLARSHIP FOR FOREIGN STUDENTS
                ↗️
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="jobs">
        <div class="container">
          <h1>Job opportunities</h1>
          <ul>
            <li>
              <a target="_blank" href="https://www.jobsforher.com/">
                JOBS FOR HER ↗️
              </a>
            </li>
            <li>
              <a target="_blank" href="https://powertofly.com/">
                POWER TO FLY ↗️
              </a>
            </li>
            <li>
              <a target="_blank" href="https://jobspresso.co/">
                JOBSPRESSO ↗️
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.theswingshift.co/">
                THE SWING SHIFT ↗️
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.chargebee.com/careers/women-in-tech/"
              >
                CHARGEBEE ↗️
              </a>
            </li>
            <li>
              <a target="_blank" href="https://themomproject.com/">
                THE MOM PROJECT ↗️
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.creativecircle.com/">
                CREATIVE CIRCLE ↗️
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.flexjobs.com/">
                FLEX JOBS ↗️
              </a>
            </li>
            <li>
              <a target="_blank" href="https://justremote.co/">
                JUST REMOTE ↗️
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <h1>
                <a id="back-to-top" href="#go-to-top">
                  TECHIFY
                </a>
              </h1>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <p>The New Civilisation</p>
              <p>&#169; - 2020</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <a target="_blank" href="https://github.com/arunmishra2000">
                <i class="fab fa-github fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Resources;
