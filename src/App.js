import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import AllPlants from './pages/allPlants/AllPlants';
import LanguageContextProvider from "./context/LanguageContext";

// ## Stappenplan

// **Benodigdheden**:
// * context (`LanguageContext`)
// * in die context beschikbaar: de geselecteerde taal ("nl" / "es")
// * in die context beschikbaar: taal-verander functie (`toggleLanguage`) zodat we vanuit de header kunnen wisselen

// 1.[x] `LanguageContext` maken (in apart bestandje) en exporteren
// 2.[x] `LanguageContext` importeren in `App.js`
// 3.[x] We maken gebruik van de `LanguageContext.Provider` en wikkelen dit als component om alle componenten in `App.js` heen
// 4.[x]Via de `value` property een data object in de context plaatsen (`const data = { test: "test" }`)
// 5[x] Kies een pagina en abonneer die op onze `LanguageContext`.
// * [x]Importeer de `LanguageContext`
// * [x]`useContext` functie importeren uit React en aanroepen met de `LanguageContext`
// * [x]We desctructuren de `test` property uit het object die we nodig hebben!
// * [x]Gebruik de data die in `test` staat in het component: `<p>{test}</p>` of in een `console.log(test)`
// [x] 6. Werkt dit? Top! Dan kunnen we verder!
// [x]    7. Maak op de plek waar jouw data object staat (`App.js`) een stukje state aan voor `language, toggleLanguage`
// [x] 8. Maak daar (`App.js`) een aparte functie die bij aanroep (doormiddel van de `toggleLanguage`-functie) de taal op Nederlands zet
// [x] 9. Maak daar (`App.js`) een aparte functie die bij aanroep (doormiddel van de `toggleLanguage`-functie) de taal op Spaans zet
// [x] 10. Stop de twee functies én `language` in dat data object
//     ```javascript
// const [language, toggleLanguage] = useState('nl');
// function setNl() {
//     toggleLanguage('nl')
// }
// function setEs() {
//     toggleLanguage('es')
// }
// const data = {
//     activeLanguage: language,
//     setNlFunction: setNl,
//     setEsFunction: setEs,
// }
// ```
// [x]11. Test of je de actieve taal vanuit een pagina uit de context kunt halen en in de console kunt loggen! (zoals stap 5)
// [x]12. Zorg ervoor dat op iedere pagina de juiste content wordt weergeven op basis van de actieve taal
// []13. Zorg ervoor dat je met een knopje in de header van taal kunt wisselen
// [x]14. (en dat er dus ook een andere vlag wordt weergegeven)
// []15. Maak een apart component van de Provider!
// []* Kopieer de hele `function App()` uit `App.js` en plak dit in het context bestand
// []* Verander de naam `App` naar `LanguageContextProvider` en voeg de children property toe
// []* Vervang de huidige componten in deze functie door de children property
// []* Exporteer deze functie
// []* Wikkel het nieuwe `LanguageContextProvider` component om `<App />` in `index.js`





function App() {



  return (
      <LanguageContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/all-plants">
            <AllPlants />
          </Route>
        </Switch>
        </Router>
      </LanguageContextProvider>
  );
}

export default App;
