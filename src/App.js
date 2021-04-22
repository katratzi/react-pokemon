import './App.css';
import InputArea from './components/InputArea';

function App() {

  async function catchPokemon(name) {
    console.log(name);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson);
  }

  return (
    <div className="App">
      <header className="App-header">
        <InputArea onClicked={catchPokemon} />
      </header>
    </div>
  );
}

export default App;
