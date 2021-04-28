import React, { useState } from "react";
import FifthSlider from "./slider/FifthSlider";
import FirstSlider from "./slider/FirstSlider";
import FourthSlider from "./slider/FourthSlider";
import SecondSlider from "./slider/SecondSlider";
import ThirdSlider from "./slider/ThirdSlider";

export default function Slider() {
  let [count, setCount] = useState(1);

  const updateCount = () => {
    setCount(count === 5 ? 1 : count + 1);
  };

  const preveCount = () => {
    setCount(count === 1 ? 5 : count - 1);
  };

  const switchFn = (count) => {
    switch (count) {
      case 1:
        return <FirstSlider setCount={updateCount} preveCount={preveCount} />;

      case 2:
        return <SecondSlider setCount={updateCount} preveCount={preveCount} />;

      case 3:
        return <ThirdSlider setCount={updateCount} preveCount={preveCount} />;
      case 4:
        return <FourthSlider setCount={updateCount} preveCount={preveCount} />;

      case 5:
        return <FifthSlider setCount={updateCount} preveCount={preveCount} />;

      default:
        break;
    }
  };

  return <>{switchFn(count)}</>;
}
