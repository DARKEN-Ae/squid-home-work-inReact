import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../assets/LOGO.png";
import "./Header.scss";

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
              <button className="contact-us_btn" onClick={this.toggleMenu}>
                Contact us
              </button>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Index;
