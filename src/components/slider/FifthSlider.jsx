import React from "react";
import { LeftArrow, RightArrow } from "../../assets/icon/icon";
import Js from "../../assets/images/js.png";

export default function FifthSlider({ setCount, preveCount }) {
  return (
    <section className="slider">
      <div className="image">
        <img src={Js} alt="first " />
      </div>
      <div className="overlap-text">
        <h2>Javascript</h2>
        <p>
          JavaScript is a scripting or programming language that allows you to
          implement complex features on web pages — every time a web page does
          more than just sit there and display static information for you to
          look at — displaying timely content updates, interactive maps,
          animated 2D/3D graphics, scrolling video jukeboxes, etc.
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
