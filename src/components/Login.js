import React from "react";
import pic from "./assets/abc2.svg";
import { useHistory, Redirect, Link, NavLink } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  return (
    <>
      <section id="login">
        <div class="row">
          <div id="login-form" class="col-lg-6">
            <h1 style={{ fontWeight: "bolder" }}>
              <a href="/home">The New Civilisation</a>
            </h1>
            <h3>Log in.</h3>
            <p>Log in with your credentials.</p>

            <form method="POST" autoComplete="off">
              <div class="form-group">
                <label htmlFor="email">Your CC E-mail</label>
                <input
                  placeholder="name@domain.com"
                  type="email"
                  class="form-control"
                  name="username"
                  id="email"
                />
              </div>
              <div class="form-group">
                <label htmlFor="pwd">Password</label>
                <input
                  placeholder="at least 8 characters"
                  type="password"
                  class="form-control"
                  name="password"
                  id="pwd"
                />
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" /> Keep me signed in
                </label>
              </div>
              <button
                type="submit"
                class="btn submit-btn"
                onClick={() => {
                  history.push("/HomePage");
                  window.location.reload();
                }}
              >
                Log in
              </button>

              <p class="extra">
                Dont't have an account?{" "}
                <Link
                  onClick={() => {
                    history.push("/Register");
                    window.location.reload();
                  }}
                >
                  Sign Up
                </Link>
              </p>
              <p style={{ textAlign: "center" }}>
                <a href="mailto:takemetothechurchnearby@gmail.com?subject=Forgot Password for TECHIFY&body=Hey! Please help me out ASAP.">
                  Forgot Password?
                </a>
              </p>
            </form>
          </div>
          <div id="login-img" class="col-lg-6">
            <img style={{ width: "90vh" }} src={pic} alt="login-hero" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
