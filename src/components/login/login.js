import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="login-fg">
        <div className="container-fluid">
          <div className="row">
            {/*Picture*/}
            <div
              className="col-xl-8 col-lg-7 col-md-12 bg"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/user/danielacuevas/1600x900")',
              }}
            >
              <div className="info">
                <h1>Login</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            {/*/Picture*/}
            {/*--Login-*/}
            <div className="col-xl-4 col-lg-5 col-md-12 login">
              <div className="login-section">
                <div className="logo clearfix">
                  <a>Login</a>
                </div>
                <h3>Sign in into your account</h3>
                <ul className="social">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f facebook-i" />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter twitter-i" />
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="google">
                      <i className="fab fa-google google-i" />
                      <span>Google</span>
                    </a>
                  </li>
                </ul>
                <div className="or-login clearfix">
                  <span>Or</span>
                </div>
                <div className="form-container">
                  <form action="#" method="GET">
                    <div className="form-group form-fg">
                      <input
                        type="email"
                        name="email"
                        className="input-text"
                        placeholder="Email Address"
                      />
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="form-group form-fg">
                      <input
                        type="email"
                        name="email"
                        className="input-text"
                        placeholder="Password"
                      />
                      <i className="fa fa-unlock-alt" />
                    </div>
                    <div className="checkbox clearfix">
                      <div className="form-check checkbox-fg">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="remember"
                        />
                        <label className="form-check-label" htmlFor="remember">
                          Remember me
                        </label>
                      </div>
                      <a href="#">Forgot Password</a>
                    </div>
                    <div className="form-group mt-2">
                      <button type="submit" className="btn-md btn-fg btn-block">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <p>
                  Don't have an account?{" "}
                  <a href="/auth/register" className="linkButton">
                    {" "}
                    Register
                  </a>
                </p>
              </div>
            </div>
            {/*--/Login-*/}
          </div>
        </div>
      </div>
    );
  }
}
