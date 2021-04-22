import './App.css';
import React, { useState } from 'react';
import InputArea from './components/InputArea';
import Pokemon from './components/Pokemon';


function App() {

  // try and catch one with this hook!
  const [caughtPokemon, setCaughtPokemon] = useState(false);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonSpriteURL, setPokemonURL] = useState('');

  // callback from input
  async function catchPokemon(name) {
    name = name.toLowerCase();
    console.log(`trying to catch ${name}`);
    // let's query the pokeapi and see if we have a correct name
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // did we get a good response if HTTP-status is 200-299
    if (response.ok) {
      const myJson = await response.json(); //extract JSON from the http response
      console.log(myJson.name + ' ' + myJson.sprites.front_default);
      setPokemonName(myJson.name);
      setPokemonURL(myJson.sprites.front_default);
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
        {caughtPokemon && <Pokemon name={pokemonName} imgUrl={pokemonSpriteURL} />}
      </header>
    </div>
  );
}

export default App;
