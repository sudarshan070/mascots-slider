import React from "react";
import { LeftArrow, RightArrow } from "../../assets/icon/icon";
import Css from "../../assets/images/css.webp";

export default function FourthSlider({ setCount, preveCount }) {
  return (
    <section className="slider">
      <div className="image">
        <img src={Css} alt="first " />
      </div>
      <div className="overlap-text">
        <h2>CSS</h2>
        <p>
          Cascading Style Sheets (CSS) is a style sheet language used for
          describing the presentation of a document written in a markup language
          such as HTML. CSS is a cornerstone technology of the World Wide Web,
          alongside HTML and JavaScript.
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
