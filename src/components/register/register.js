import React, { Component } from "react";
import authAxios from '../../axios/Auth/register'

export default class register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      retype: "",
      firstname: "",
      lastname: "",
      email: "",
    };
    
    this.onUsernameChanged = this.onUsernameChanged.bind(this);
    this.onEmailChanged = this.onEmailChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onRetypeChanged = this.onRetypeChanged.bind(this);
    this.onFirstnameChanged = this.onFirstnameChanged.bind(this);
    this.onLastnameChanged = this.onLastnameChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUsernameChanged(e) {
    this.setState({ username: e.target.value });
  }

  onEmailChanged(e) {
    this.setState({ email: e.target.value });
  }
  onPasswordChanged(e) {
    this.setState({ password: e.target.value });
  }
  onRetypeChanged(e) {
    this.setState({ retype: e.target.value });
  }
  onFirstnameChanged(e) {
    this.setState({ firstname: e.target.value });
  }
  onLastnameChanged(e) {
    this.setState({ lastname: e.target.value });
  }
  onSubmit() {
    const data = {
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    }
     authAxios.register(data);
  }

  render() {
    return (
      <div className="login-fg">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-8 col-lg-7 col-md-12 bg"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/user/danielacuevas/1600x900")',
              }}
            >
              <div className="info">
                <h1>Sign Up</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-12 login">
              <div className="login-section">
                <div className="logo clearfix">
                  <a>Sign Up</a>
                </div>
                <h3>Sign up with your account</h3>
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
                  <form>
                    <div className="form-group form-fg">
                      <input
                        type="text"
                        name="username"
                        className="input-text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.onUsernameChanged}
                      />
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="form-group form-fg">
                      <input
                        type="email"
                        name="email"
                        className="input-text"
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.onEmailChanged}

                      />
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="form-group form-fg">
                      <input
                        type="text"
                        name="firstname"
                        className="input-text"
                        placeholder="First Name"
                        value={this.state.firstname}
                        onChange={this.onFirstnameChanged}
                      />
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="form-group form-fg">
                      <input
                        type="text"
                        name="lastname"
                        className="input-text"
                        placeholder="Last Name"
                        value={this.state.lastname}
                        onChange={this.onLastnameChanged}
                      />
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="form-group form-fg">
                      <input
                        type="password"
                        name="password"
                        className="input-text"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onPasswordChanged}
                      />
                      <i className="fa fa-unlock-alt" />
                    </div>
                    <div className="form-group form-fg">
                      <input
                        type="password"
                        name="retype"
                        className="input-text"
                        placeholder="Re-password"
                        value={this.state.retype}
                        onChange={this.onRetypeChanged}
                      />
                      <i className="fa fa-unlock-alt" />
                    </div>
                    <div className="form-group mt-2">
                      <button type="button" onClick={this.onSubmit} className="btn-md btn-fg btn-block">
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
                <p>
                  Already have an account?
                  <a href="/auth/login" className="linkButton">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
