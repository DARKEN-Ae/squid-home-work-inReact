import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../assets/LOGO.png";
import "./Header.scss";

export class index extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <Link to={"/"}>
              <img src={HeaderLogo} alt="HeaderLogo" />
            </Link>
            <ul>
              <li>
                <Link className="nav_link" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav_link" to={"/about"}>
                  About us
                </Link>
              </li>
              <li>
                <Link className="nav_link" to={"/portfolio"}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="nav_link" to={"/news"}>
                  News
                </Link>
              </li>
              <button className="contact-us_btn">Contact us</button>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default index;
