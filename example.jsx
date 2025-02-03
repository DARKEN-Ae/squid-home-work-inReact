import React, { Component } from "react";
import Slider from "react-slick";

export class example extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div>
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
    );
  }
}

export default example;
