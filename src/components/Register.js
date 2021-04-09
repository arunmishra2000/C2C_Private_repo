import React from "react";
import pic from "./assets/abc2.svg";

function Register() {
  return (
    <>
      <section id="login">
        <div className="row">
          <div id="signup-form" class="col-lg-6">
            <h1>
              <a href="/home">The New Civilisation</a>
            </h1>
            <h3>Hello!</h3>
            <p>Sign up to get started</p>

            <form action="/register" method="POST">
              <div class="form-group">
                <label htmlFor="username">Username</label>
                <input
                  placeholder="JohnWick"
                  type="text"
                  name="name"
                  className="form-control"
                  id="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your e-mail</label>
                <input
                  placeholder="name@domain.com"
                  type="email"
                  name="username"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password</label>
                <input
                  placeholder="at least 8 characters"
                  type="password"
                  name="password"
                  className="form-control"
                  id="pwd"
                />
              </div>
              <div className="form-group">
                <label htmlFor="dp">Profile Picture</label>
                <input
                  placeholder="url"
                  type="text"
                  name="userImage"
                  className="form-control"
                  id="dp"
                />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> I agree with the Terms and
                  conditions
                </label>
              </div>
              <button type="submit" class="btn submit-btn">
                Sign up
              </button>
              <p className="extra">
                Already have an account? <a href="/login">Sign In</a>
              </p>
            </form>
          </div>
          <div id="login-img" className="col-lg-6">
            <img width="100%" src={pic} alt="login-hero" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
