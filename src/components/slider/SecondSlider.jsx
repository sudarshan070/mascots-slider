import React from "react";
import { LeftArrow, RightArrow } from "../../assets/icon/icon";
import Second from "../../assets/images/second.jpeg";
import Bip from "../../assets/audio/second.mp3";
import ReactAudioPlayer from "react-audio-player";


export default function SecondSlider({ setCount, preveCount }) {
  return (
    <section className="slider">
            <ReactAudioPlayer src={Bip} autoPlay={true} loop={true}  />

      <div className="image">
        <img src={Second} alt="first " />
      </div>
      <div className="overlap-text">
        <h2>Web Developer</h2>
        <p>
          A web developer is a programmer who specializes in, or is specifically
          engaged in, the development of World Wide Web applications using a
          client–server model. The applications typically use HTML, CSS and
          JavaScript in the client, PHP, ASP.NET (C#), Python, Node.js, Go or
          Java in the server, and http for communications between client and
          server
        </p>
      </div>
      <div className="arrows">
        <div className="arrow-circle" onClick={preveCount}>
          <LeftArrow />
        </div>
        <div className="arrow-circle " onClick={setCount}>
          <RightArrow />
        </div>
      </div>
    </section>
  );
}
