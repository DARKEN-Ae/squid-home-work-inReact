import React, { Component, Fragment } from "react";
import "./sass/Services.scss";
import doom from "../components/assets/Services/Doom.png";
import asssasin from "../components/assets/Services/assasin.svg";
import rembo from "../components/assets/Services/rembo.svg";
import ot from "../components/assets/Services/ot.svg";
import "./sass/Services.scss";
import Slider from "react-slick";

export class Services extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };

    return (
      <>
        <aside aside className="container">
          <h1 className="home">
            Lorem Ipsum is simply dummy text of the printing and.
          </h1>
          <p className="homeP">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          {/* <div>
          <div>
            <img src="" alt="no img?" />
            <div>
              <h4>30+</h4>
              <p>Clients</p>
            </div>
          </div>
          <div>
            <img src="" alt="no img?" />
            <div>
              <h4>30+</h4>
              <p>Clients</p>
            </div>
          </div>
          <div>
            <img src="" alt="no img?" />
            <div>
              <h4>30+</h4>
              <p>Clients</p>
            </div>
          </div>
        </div> */}
          {/* 1 */}
          <div className="img_div_big">
            <img src={doom} alt="No img?" className="z_img" />
            <div>
              <h1 className="h1_in_divv white">
                Lorem Ipsum is simply dummy text.
              </h1>
              <p
                className="white"
                style={{ margin: "10px", maxWidth: "427.88px" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy .
              </p>
              <p className="white div_in_p_mini">✅Lorem Ipsum is simply</p>
              <p className="white div_in_p_mini">✅Lorem Ipsum is simply</p>
              <p className="white div_in_p_mini">✅Lorem Ipsum is simply</p>
              <p className="white div_in_p_mini">✅Lorem Ipsum is simply</p>
            </div>
          </div>
          {/* 2 */}
          <div className="img_div_big">
            <div>
              <h1 className="h1_in_divv white">
                Lorem Ipsum is simply dummy text.
              </h1>
              <p className="white p_in2div">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <p className="white" style={{ marginTop: "10px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <img src={asssasin} alt="No img?" className="z_img" />
          </div>
          <button className="button_asssasin">Button</button>
          {/* 3 */}
          <div className="img_div_big">
            <img src={ot} alt="No img?" className="z_img" />
            <div>
              <h1 className="h1_in_divv white">
                Lorem Ipsum is simply dummy text.
              </h1>
              <p
                className="white"
                style={{ margin: "10px", maxWidth: "427.88px" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <p
                className="white"
                style={{ margin: "10px", maxWidth: "427.88px" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="button_asssasin">Button</button>
            </div>
          </div>

          {/* 4 */}
          <div className="img_div_big">
            <div>
              <h1 className="h1_in_divv white">
                Lorem Ipsum is simply dummy text.
              </h1>
              <p className="white p_in2div">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <p className="white" style={{ marginTop: "10px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <img src={rembo} alt="No img?" className="z_img" />
          </div>
          <button className="button_asssasin">Button</button>
        </aside>
        <div style={{ backgroundColor: "rgb(27, 67, 227)" }}>
          <div className="container">
            <h3 className="blue_bac_h1 white">Lorem Ipsum</h3>
            <p className="blue_bac_p white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="footttter_white">
              <div>
                <h3 className="">Stay in the loop</h3>
                <p>
                  Subscribe to receive the latest news and updates about TDA. We
                  promise not to spam you!
                </p>
              </div>

              <label class="label">
                <span class="icon">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.25"
                      d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  class="input"
                  placeholder="Enter name"
                  autocomplete="off"
                />
              </label>
            </div>
          </div>
        </div>
        <div  className="container">
          <Slider {...settings}>
            <div className="card-cr">
              <img src={"Your Img"} alt="Slide 1" />
              <div className="card-info">
                <img src={"Your Img"} alt="Fire" />
                <p className="follower-p">40 Followers</p>
              </div>
            </div>
            <div className="card-cr">
              <img src={"Your Img"} alt="Slide 2" />
              <div className="card-info">
                <img src={"Your Img"} alt="Fire" />
                <p className="follower-p">40 Followers</p>
              </div>
            </div>
            <div className="card-cr">
              <img src={"Your Img"} alt="Slide 3" />
              <div className="card-info">
                <img src={"Your Img"} alt="Fire" />
                <p className="follower-p">40 Followers</p>
              </div>
            </div>
            <div className="card-cr">
              <img src={"Your Img"} alt="Slide 3" />
              <div className="card-info">
                <img src={"Your Img"} alt="Fire" />
                <p className="follower-p">40 Followers</p>
              </div>
            </div>
            <div className="card-cr">
              <img src={"Your Img"} alt="Slide 3" />
              <div className="card-info">
                <img src={"Your Img"} alt="Fire" />
                <p className="follower-p">40 Followers</p>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

export default Services;
