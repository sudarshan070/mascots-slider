import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { LeftArrow, RightArrow } from "../../assets/icon/icon";
import First from "../../assets/images/first.jpeg";
import Bip from "../../assets/audio/bip.mp3";

export default function FirstSlider({ setCount, preveCount }) {
  return (
    <section className="slider">
      <ReactAudioPlayer src={Bip} autoPlay={true} loop={true}  />
      <div className="image">
        <img src={First} alt="first " />
      </div>
      <div className="overlap-text">
        <h2>Programming Language</h2>
        <p>
          A programming language is a formal language comprising a set of
          instructions that produce various kinds of output. Programming
          languages are used in computer programming to implement algorithms.
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
      <div></div>
    </section>
  );
}
