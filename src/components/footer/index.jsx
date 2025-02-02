import React, { Component } from "react";
import FooterLogo from "../assets/footerLogo.png";
import "./Footer.scss";
import Facebook from "../assets/Media/fc.png";
import Instagram from "../assets/Media/in.png";
import Twitter from "../assets/Media/tw.png";
import In from "../assets/Media/in.png";

export class index extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer_section">
            <div className="ft_one">
              <img src={FooterLogo} alt="FooterLogo" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p>@Lorem</p>
            </div>
            <div className="footer_center">
              <h3>About Us</h3>
              <ul>
                <li>Zeux</li>
                <li>Portfolio</li>
                <li>Careers</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="footer_end">
              <h3>Contact us</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p>+908 89097 890</p>
            </div>
            <div className="social_media">
              <ul>
                <li>
                  <img src={Facebook} alt="Facebook" />
                </li>
                <li>
                  <img src={Instagram} alt="Instagram" />
                </li>
                <li>
                  <img src={Twitter} alt="Twitter" />
                </li>
                <li>
                  <img src={In} alt="LinkedIn" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </footer>
    );
  }
}

export default index;
