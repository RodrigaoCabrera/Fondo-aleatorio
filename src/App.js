import React, { useState } from "react";
/* import ContactList from './components/ContactList' */
import "./App.css";

const App = () => {
  let IntervalColor;
  const mouseOver = () => {
    let rgb = [];
    for (let index = 0; index < 3; index++) {//Se crea un array con tres valores numéricos
      let number = Math.floor(Math.random() * 255); //Se crea un número aleatorio
      rgb.push(number.toString()); //Se guarda el número dentro de un array
    }

    let box = document.getElementById("box");
    const [r, g, b] = rgb;
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    IntervalColor = setTimeout(mouseOver, 1000);
  };

  const mouseLeave = () => {
    clearInterval(IntervalColor);
  };
  return (
    <div>
      {/* <h1>Contact List</h1>
      <ContactList/> */}
      <div
        id="box"
        className="container"
        onMouseEnter={() => mouseOver()}
        onMouseLeave={() => mouseLeave()}
        onDoubleClick={() => mouseLeave()}
      ></div>
    </div>
  );
};

export default App;
