import { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const props = useSpring({ val: num, from: { val: 0 } });

  const handleClick = () => {
    setNum(rand(1, 10000));
  };

  function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    if (1000 >= randomNum) {
      setTimeout(function () {
        alert("The site says... You have won!");
      }, 1000);
    } else {
      setTimeout(function () {
        alert("The site says... Too bad, you have lost!");
      }, 1000);
    }
    return Math.round(randomNum);
  }
  return (
    <div className="container">
      <h1>The JavaScript Lottery</h1>
      <h3>Click the button the draw a number.</h3>
      <div>
        <button onClick={handleClick}>Lets Play!</button>
      </div>
      <p>
        Your Number:
        <animated.div className="number">
          {props.val.interpolate((val) => Math.round(val))}
        </animated.div>
      </p>
      <p>* Any number in the 1 to 1000 range wins!</p>
    </div>
  );
}

export default App;
