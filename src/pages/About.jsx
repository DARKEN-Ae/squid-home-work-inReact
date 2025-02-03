import React, { Component } from "react";
import "./sass/About.scss";
import { NavLink } from "react-router-dom";
import arrow from "../components/assets/About/arrow.svg";
import robit_1 from "../components/assets/About/Rectangle.png";
import Bill from "../components/assets/About/icons/Bill.svg";
import wommen from "../components/assets/About/icons/wommen.svg";
import wommen_2 from "../components/assets/About/icons/wommen_2.svg";
import user from "../components/assets/About/icons/users.svg";
//

export class About extends Component {
  render() {
    return (
      <div>
        <nav className="container">
          <div className="inTextANDImg">
            <div className="nav_text">
              <div className="two_a">
                <NavLink to="/">Home</NavLink>
                <img src={arrow} alt="No img?" />
                <NavLink to="#">About us</NavLink>
              </div>
              <h1> Lorem Ipsum is simply dummy text of the printing and.</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button>
                Get in touch <img src={arrow} alt="No img?" />
              </button>
            </div>
            <div className="nav_img"></div>
          </div>
        </nav>
        <main>
          <div className="container">
            <div className="three_cards">
              <p>Why work with us</p>
              <div className="cards">
                <div className="card">
                  <button>Lorem ipsum</button>
                  <h3>Lorem Ipsum</h3>
                  <h6>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </h6>
                </div>
                <div className="card">
                  <button>Lorem ipsum</button>
                  <h3>Lorem Ipsum</h3>
                  <h6>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </h6>
                </div>
                <div className="card">
                  <button>Lorem ipsum</button>
                  <h3>Lorem Ipsum</h3>
                  <h6>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="img_text-nav">
            <div className="container">
              <div className="img_text-nav">
                <div className="img_text">
                  <div className="images">
                    <img src={robit_1} alt="robit_1 no?" />
                  </div>
                  <div className="text">
                    <span>Lorem ipsum</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <h6>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries,
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="emojis">
            <div className="container">
              <p>Our Team</p>
              <div className="emojiese">
                <div className="emoji">
                  <img src={Bill} alt="Bill no?" />
                  <h5>John peter</h5>
                  <p>COO</p>
                </div>
                <div className="emoji">
                  <img src={wommen} alt="Bill no?" />
                  <h5>John peter</h5>
                  <p>COO</p>
                </div>
                <div className="emoji">
                  <img src={wommen_2} alt="Bill no?" />
                  <h5>John peter</h5>
                  <p>COO</p>
                </div>
                <div className="emoji">
                  <img src={user} alt="Bill no?" />
                  <h5>John peter</h5>
                  <p>COO</p>
                </div>
              </div>
              <div className="emoji_bottom">
                <h5>Lorem Ipsum</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="card_text">
                  <div className="card_text-text">
                    <h4>Stay in the loop</h4>
                    <h2>
                      Subscribe to receive the latest news and updates about
                      TDA. We promise not to spam you!
                    </h2>
                  </div>
                  <div className="card_text-text_input">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      required
                    />
                    <button type="submit">Continue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default About;
