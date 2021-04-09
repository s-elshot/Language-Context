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

    // function setNl() {
    //     if (language === "es") {
    //         toggleLanguage("nl")
    //     }
    // }

    const data = {
        test: "APP.js?: test",
        jordan: "Jordan 1 - black toe",
        adidas: "Yeezy boost 2",
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





