import React, { Component } from "react";
import "./sass/Contact.scss";
import videoFile from "../components/assets/soon.mp4";
export class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="video-container">
          <h1>Contact</h1>
          <video
            width="100%"
            height="auto"
            controls
            conautoPlay
            loop
            mutedtrols
          >
            <source src={videoFile} type="video/mp4" />
            Sizning brauzeringiz video formatini qo'llab-quvvatlamaydi.
          </video>
        </div>
      </div>
    );
  }
}

export default Contact;
