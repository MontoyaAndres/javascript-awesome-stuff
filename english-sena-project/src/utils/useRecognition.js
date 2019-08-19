let transcript = "";

export function useRecognition() {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = "en-US";
  recognition.continuous = true;

  recognition.addEventListener("result", event => {
    transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join("");

    console.log(transcript);
  });

  return { recognition, transcript };
}
