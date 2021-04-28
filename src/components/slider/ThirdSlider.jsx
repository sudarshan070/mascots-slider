import React from "react";
import { LeftArrow, RightArrow } from "../../assets/icon/icon";
import Html from "../../assets/images/html.png";
import Bip from "../../assets/audio/three.mp3";
import ReactAudioPlayer from "react-audio-player";

export default function ThirdSlider({ setCount, preveCount }) {
  return (
    <section className="slider">
      <ReactAudioPlayer src={Bip} autoPlay={true} loop={true} />

      <div className="image">
        <img src={Html} alt="first " />
      </div>
      <div className="overlap-text">
        <h2>HTML</h2>
        <p>
          The HyperText Markup Language, or HTML is the standard markup language
          for documents designed to be displayed in a web browser. It can be
          assisted by technologies such as Cascading Style Sheets (CSS) and
          scripting languages such as JavaScript.
        </p>
      </div>
      <div className="arrows">
        <div className="arrow-circle" onClick={preveCount}>
          <LeftArrow />
        </div>
        <div className="arrow-circle" onClick={setCount}>
          <RightArrow />
        </div>
      </div>
    </section>
  );
}
