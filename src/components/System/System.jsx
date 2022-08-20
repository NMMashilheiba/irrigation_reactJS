import { useState, useEffect } from "react";
import "./System.css";

var timer;

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [flag, setFlag] = useState(0);
  useEffect(() => {
    if (seconds === 5) {
      setMinutes((prev) => prev + 1);
      setSeconds(0);
    }
    if (minutes === 5) {
      setHours(hours + 1);
      setMinutes(0);
    }
    // console.log(seconds);
  }, [seconds]);

  const startTimer = () => {
    setFlag(1);
    timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  };

  const stopTimer = () => {
    clearInterval(timer);
    setFlag(0);
    console.log("clicked stop");
  };

  const resetTimer = () => {
    stopTimer();

    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <div className="clock">
      <br />
      <br />
      <section>
        {flag === 0 ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button>Start</button>
        )}

        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <br />
      <br />
      <p>
        Time:{hours}:{minutes}:{seconds}
      </p>
      <br />
      <br />
    </div>
  );
}

export default Timer;
