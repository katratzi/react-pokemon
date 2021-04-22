import './App.css';
import InputArea from './components/InputArea';

function App() {

  async function catchPokemon(name) {
    console.log(`trying to catch ${name}`);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // did we get a good response if HTTP-status is 200-299
    if (response.ok) {
      const myJson = await response.json(); //extract JSON from the http response
      console.log(myJson);
    } else {
      console.log("could not catch");
    }
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
