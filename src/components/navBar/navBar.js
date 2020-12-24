import React, { Component } from "react";
import "../../styles/navBar/navBar.css";
import Ulogo from '../../resources/images/logo.png'
export default class navBar extends Component {
  render() {
    return (
      <div className="bottom-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-1">
              <div className="logo">
                <a href="index.html">
                  <img src={Ulogo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Mobile
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Web
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="search">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
            <div className="col-md-2">
              <div className="user">
                <a href="cart.html" className="btn cart">
                  <i className="fa fa-shopping-cart" />
                  <span>(0)</span>
                </a>
                <a
                  href="/auth/login"
                  className="btn loginBtn"
                  style={{ marginLeft: "10px" }}
                >
                  <i className="fas fa-sign-in-alt" aria-hidden="true" />
                  <span>Login</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
