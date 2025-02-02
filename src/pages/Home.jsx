import React, { Component, Fragment } from "react";
import "./sass/Home.scss";
import josticImg from "../components/assets/Home/img/jostic.png";
import CryEngineImg from "../components/assets/Home/icon/cryengine.png";
import UnrelEngineImg from "../components/assets/Home/icon/unrelingine.png";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <main>
            <div className="section-one">
              <h5>Proved By prodesigner</h5>
              <h1>Work that we produce for our clients</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <button>Get more details</button>
              <div className="brend-icons">
                <img src={CryEngineImg} alt="CryEngineImg" />
                <img src={UnrelEngineImg} alt="UnrelEngineImg" />
              </div>
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default Home;
