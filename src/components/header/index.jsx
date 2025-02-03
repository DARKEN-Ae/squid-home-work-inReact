import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../assets/LOGO.png";
import "./Header.scss"; // or
import BackTop from "@uiw/react-back-top";

export class Index extends Component {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <header>
        <BackTop
          style={{ backgroundColor: "red", color: "#fff" }}
          step={500}
          speed={25}
          content={
            <div className="back_top">
              <button class="button">
                <svg viewBox="0 0 384 512" class="svgIcon">
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                </svg>
              </button>
            </div>
          }
        />
        <div className="container">
          <nav>
            <Link to={"/"}>
              <img src={HeaderLogo} alt="HeaderLogo" />
            </Link>

            <div className="menu-icon" onClick={this.toggleMenu}>
              ☰
            </div>

            <ul className={this.state.menuOpen ? "mobile-menu" : ""}>
              <li>
                <Link className="nav_link" to={"/"} onClick={this.toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav_link"
                  to={"/about"}
                  onClick={this.toggleMenu}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="nav_link"
                  to={"/services"}
                  onClick={this.toggleMenu}
                >
                  Servies
                </Link>
              </li>
              <li>
                <Link
                  className="nav_link"
                  to={"/news"}
                  onClick={this.toggleMenu}
                >
                  News
                </Link>
              </li>
              <Link to={"/contact"}>
                <button className="contact-us_btn" onClick={this.toggleMenu}>
                  Contact us
                </button>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Index;
