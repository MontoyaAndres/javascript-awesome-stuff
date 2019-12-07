import { useState } from "react";

function useEmail() {
  const [isEmailSend, setEmailSend] = useState(false);

  async function handleSendEmail(e) {
    e.preventDefault();

    const nameOrEmail = e.target[0].value;
    const company = (e.target[1] && e.target[1].value) || "";
    const email = (e.target[2] && e.target[2].value) || "";
    const tel = (e.target[3] && e.target[3].value) || "";
    const description = (e.target[4] && e.target[4].value) || "";

    const responseFetch = await fetch("/api", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nameOrEmail,
        company,
        email,
        tel,
        description
      })
    });

    const response = await responseFetch.json();

    if (response.ok) {
      setEmailSend(true);
    }
  }

  return {
    onSendEmail: handleSendEmail,
    isEmailSend,
    closeEmailAlert: () => setEmailSend(false)
  };
}

export default useEmail;
