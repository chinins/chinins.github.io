import React from "react";
import backgroundImage from "./assets/pictures/backgroundImage.png";
import "./App.css";
import { LinksList } from "./components";

function App() {
  return (
    <div className="App">
      <header />
      <img src={backgroundImage} alt="background" className="App-background" />
      <main className="App-main">
        <div className="App-page-wrap">
          <p>Hey, my name is Olga and I am a full stack developer.</p>
          <p>You can find me on:</p>
          <LinksList />
        </div>
      </main>
    </div>
  );
}

export default App;
