import React, {createContext, useState} from 'react'

export const LanguageContext = createContext({});

function LanguageContextProvider({children}) {

    const [language, toggleLanguage] = useState("es")

    function setLan() {
        if (language === "nl") {
            toggleLanguage("es")
        } else {
            toggleLanguage("nl")
        }
    }

    const data = {
        activeLanguage: language,
        setLan: setLan,
    }

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;





