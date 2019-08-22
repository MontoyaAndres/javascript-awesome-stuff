import { useState, useEffect } from "react";

const TIME = 30;

export function useTimer(startTimer) {
  const [timer, setTimer] = useState(TIME);

  useEffect(() => {
    let interval = null;

    if (startTimer) {
      if (timer === 0) {
        clearInterval(interval);
        setTimer(TIME);
      } else {
        interval = setInterval(() => {
          setTimer(timer => timer - 1);
        }, 1000);
      }
    }

    return () => clearInterval(interval);
  }, [timer, startTimer]);

  return { timer, setTimer };
}
