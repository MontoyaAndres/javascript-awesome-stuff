import { useState } from "react";

export function useRecognition() {
  const [transcript, setTranscript] = useState("");

  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new global.SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.addEventListener("result", event => {
    const response = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join("");

    setTranscript(response);
  });

  return { recognition, transcript };
}
