import { useState, useEffect } from "react";

export function useScore(element) {
  const [score, setScore] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (element) {
      if (element.answer === value) {
        setScore(score => score + 1);
      }
    }
  }, [value, element]);

  function handleChangeValue(value) {
    setValue(value);
  }

  return { score, setScore, handleChangeValue };
}
