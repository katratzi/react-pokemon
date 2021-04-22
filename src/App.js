import './App.css';
import React, { useState } from 'react';
import InputArea from './components/InputArea';
import Pokemon from './components/Pokemon';


function App() {

  // try and catch one with this hook!
  const [caughtPokemon, setCaughtPokemon] = useState(false);

  // callback from input
  async function catchPokemon(name) {
    name = name.toLowerCase();
    console.log(`trying to catch ${name}`);
    // let's query the pokeapi and see if we have a correct name
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // did we get a good response if HTTP-status is 200-299
    if (response.ok) {
      const myJson = await response.json(); //extract JSON from the http response
      console.log(myJson.name + ' ' + myJson.order);
      // caughtPokemon = true;
      setCaughtPokemon(true);
    } else {
      // bad response
      console.log("could not catch");
      setCaughtPokemon(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        < InputArea onClicked={catchPokemon} />
        {caughtPokemon && <Pokemon />}
      </header>
    </div>
  );
}

export default App;
