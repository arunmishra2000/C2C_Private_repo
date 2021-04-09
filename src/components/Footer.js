import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <h1>
                <a id="back-to-top" href="#go-to-top"></a>
              </h1>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <p>
                <a href="https://github.com/arunmishra2000"></a>
              </p>
            </div>
            <div
              class="col-lg-4 col-md-4 col-sm-4"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignContent: "center",
                marginLeft: "33%",
              }}
            >
              <a href="https://github.com/arunmishra2000">
                <i class="fab fa-github fa-2x"></i>
              </a>
              <a href="https://github.com/arunmishra2000">
                <i class="fab fa-behance-square fa-2x"></i>
              </a>
              <a href="https://github.com/arunmishra2000">
                <i class="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <p
          style={{
            display: "block",
            textAlign: "center",
          }}
        >
          &#169; The New Civilisation - 2020
        </p>
      </footer>
    </div>
  );
}

export default Footer;
