import React from 'react';
import "./App.css";
import "./css/app.css";
import Character from "./components/character-card/character";

function App() {

    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const response = await data.json();
        setCharacters(response.results);
    };

  return (
    <div className="App">
      <header>
        <h1>Rick & Morty Characters</h1>

            <h2>I'm Mr. Meeseeks!</h2>
            <p>A React component to display some characters of the series:</p>
      </header>
      <section className="characters-list">
        {
            characters.map(item => (
                    <Character
                        image={item.image}
                        name={item.name}
                        location={item.location.name} />
                )
            )
        }
      </section>
    </div>
  );
}

export default App;
