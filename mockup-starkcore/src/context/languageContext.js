import React from "react";

const LanguageContext = React.createContext(["en", () => {}]);

function LanguageProvider({ children }) {
  const [language, setLanguage] = React.useState("en");

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
