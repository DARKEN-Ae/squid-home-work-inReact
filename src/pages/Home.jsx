import React, { Component, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import josticImg from "../components/assets/Home/img/jostic.png";
import CryEngineImg from "../components/assets/Home/icon/cryengine.png";
import UnrelEngineImg from "../components/assets/Home/icon/unrelingine.png";
import militaryImg1 from "../components/assets/Home/img/military.svg";
import Sensie from "../components/assets/Home/img/sensie.svg";
import boxMan from "../components/assets/Home/img/box-man.svg";
import militaryImg2 from "../components/assets/Home/img/military2.svg";
import Fire from "../components/assets/Home/icon/fire.svg";
import callOfDuty from "../components/assets/Home/img/callofduty.svg";
import RedDots from "../components/assets/Home/img/red-dots.png";
import PhoneImg from "../components/assets/Home/icon/phone.png";
import Pc from "../components/assets/Home/icon/pc.png";
import Ps4 from "../components/assets/Home/icon/ps4.png";
import Vrglasses from "../components/assets/Home/icon/vr-glasses.png";
import Desktop from "../components/assets/Home/icon/desktop.png";
import MOdel3d from "../components/assets/Home/icon/3d.png";
import CursorImg from "../components/assets/Home/icon/cursor.png";
import ProjectCardImg from "../components/assets/Home/img/projects_cards.png";
import ProjectCardImg2 from "../components/assets/Home/img/project_card2.png";
import ProjectCardImg3 from "../components/assets/Home/img/project_card3.png";
import ProjectCardImg4 from "../components/assets/Home/img/project_card4.png";
import ProjectCardImg5 from "../components/assets/Home/img/project_card5.png";
import ProjectCardImg6 from "../components/assets/Home/img/project_card6.png";

import "./sass/Home.scss";
import Slider from "react-slick";

import AOS from "aos";
import "aos/dist/aos.css";

export class Home extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <Fragment>
        {/* 1 */}
        <main className="section__one">
          <div className="container">
            <div className="jostic">
              <img src={josticImg} alt="josticImg" />
            </div>
            <div className="section-one">
              <div className="sc-one-text" data-aos="fade-right">
                <h5>Proved By prodesigner</h5>
                <h1>Work that we produce for our clients</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
                <button>Get more details</button>
              </div>
              <div className="brend-icons" data-aos="fade-left">
                <img src={CryEngineImg} alt="CryEngineImg" />
                <img src={UnrelEngineImg} alt="UnrelEngineImg" />
              </div>
            </div>
          </div>
        </main>
        {/* 2 */}
        <section>
          <div className="container">
            <div className="section-two">
              <div className="section-two-text">
                <h1>Currently Trending Games</h1>
                <div className="see_all_one_btn">
                  <button type="button" class="button">
                    <span class="fold"></span>

                    <div class="points_wrapper">
                      <i class="point"></i>
                      <i class="point"></i>
                      <i class="point"></i>
                      <i class="point"></i>
                      <i class="point"></i>
                      <i class="point"></i>
                      <i class="point"></i>
                      <i class="point"></i>
                      <i class="point"></i>
                      <i class="point"></i>
                    </div>

                    <span class="inner">
                      <svg
                        class="icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                      >
                        <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                      </svg>
                      SEEL ALL
                    </span>
                  </button>
                </div>
              </div>
              <div className="section-two-cards">
                <div className="carousel-container" data-aos="fade-up">
                  <Slider {...settings}>
                    <div className="card-cr">
                      <img src={militaryImg1} alt="Slide 1" />
                      <div className="card-info">
                        <img src={Fire} alt="Fire" />
                        <p className="follower-p">40 Followers</p>
                      </div>
                    </div>
                    <div className="card-cr">
                      <img src={Sensie} alt="Slide 2" />
                      <div className="card-info">
                        <img src={Fire} alt="Fire" />
                        <p className="follower-p">40 Followers</p>
                      </div>
                    </div>
                    <div className="card-cr">
                      <img src={boxMan} alt="Slide 3" />
                      <div className="card-info">
                        <img src={Fire} alt="Fire" />
                        <p className="follower-p">40 Followers</p>
                      </div>
                    </div>
                    <div className="card-cr">
                      <img src={militaryImg2} alt="Slide 3" />
                      <div className="card-info">
                        <img src={Fire} alt="Fire" />
                        <p className="follower-p">40 Followers</p>
                      </div>
                    </div>
                    <div className="card-cr">
                      <img src={boxMan} alt="Slide 3" />
                      <div className="card-info">
                        <img src={Fire} alt="Fire" />
                        <p className="follower-p">40 Followers</p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 3 */}
        <section>
          <div className="container">
            <div className="section-three" data-aos="zoom-in">
              <h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h1>
            </div>
          </div>
        </section>
        {/* 4 */}
        <section>
          <div className="container">
            <div className="section-four" data-aos="flip-left">
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </section>
        {/* 5 */}
        <section>
          <div className="container">
            <div className="section-five" data-aos="flip-right">
              <img className="red_dot_img" src={RedDots} alt="RedDots" />
              <img className="call_of" src={callOfDuty} alt="callOfDuty" />
            </div>
          </div>
        </section>
        {/* 6 */}
        <section className="section__six_bg">
          <div className="container">
            <div className="section-six" data-aos="fade-up">
              <div className="top__texts">
                <h1>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="in_contents">
                <div className="first_fours">
                  <div className="content">
                    <img src={PhoneImg} alt="" />
                    <p>Mobile Game Development</p>
                    <img src={CursorImg} alt="CursorImg" />
                  </div>

                  <div className="content">
                    <img src={Pc} alt="Pc" />
                    <p>PC Game Development</p>
                    <img src={CursorImg} alt="CursorImg" />
                  </div>

                  <div className="content">
                    <img src={Ps4} alt="Ps4" />
                    <p>PS4 Game Development</p>
                    <img src={CursorImg} alt="CursorImg" />
                  </div>

                  <div className="content">
                    <img src={Vrglasses} alt="Vrglasses" />
                    <p>AR/VR Solutions</p>
                    <img src={CursorImg} alt="CursorImg" />
                  </div>
                </div>
                {/* 1 */}
                <div className="last_content">
                  <div className="content">
                    <img src={Desktop} alt="Desktop" />
                    <p>AR/ VR design</p>
                    <img src={CursorImg} alt="CursorImg" />
                  </div>
                  <div className="content">
                    <img src={MOdel3d} alt="MOdel3d" />
                    <p>3D Modelings</p>
                    <img src={CursorImg} alt="CursorImg" />
                  </div>
                </div>
                {/* done */}
              </div>
            </div>
          </div>
        </section>
        {/* 7 */}
        <section className="section__seven">
          <div className="container">
            <div className="section-seven">
              <h2 data-aos="flip-left">Our Recent Projects</h2>
              <p data-aos="flip-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="section-seven-cards">
                <img data-aos="fade-up" src={ProjectCardImg} alt="" />
                <img data-aos="fade-up" src={ProjectCardImg2} alt="" />
                <img data-aos="fade-up" src={ProjectCardImg3} alt="" />
                <img data-aos="fade-up" src={ProjectCardImg4} alt="" />
                <img data-aos="fade-up" src={ProjectCardImg5} alt="" />
                <img data-aos="fade-up" src={ProjectCardImg6} alt="" />
              </div>
              <div className="see_all_btn">
                <button type="button" class="button">
                  <span class="fold"></span>

                  <div class="points_wrapper">
                    <i class="point"></i>
                    <i class="point"></i>
                    <i class="point"></i>
                    <i class="point"></i>
                    <i class="point"></i>
                    <i class="point"></i>
                    <i class="point"></i>
                    <i class="point"></i>
                    <i class="point"></i>
                    <i class="point"></i>
                  </div>

                  <span class="inner">
                    <svg
                      class="icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                    >
                      <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                    </svg>
                    SEEL ALL
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* 8 */}
        <section>
          <div className="container">
            <div className="section-eight">
              <div className="section-8-text" data-aos="flip-left">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="form_div">
                <form data-aos="fade-up">
                  <div className="form-text">
                    <div className="asdghjsakjg">
                      <h4>Stay in the loop</h4>
                      <p>
                        Subscribe to receive the latest news and updates about
                        TDA. We promise not to spam you!
                      </p>
                    </div>
                    <div className="inp-div">
                      <input type="email " placeholder="Enter email address" />
                      <button type="submit">Continue</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
