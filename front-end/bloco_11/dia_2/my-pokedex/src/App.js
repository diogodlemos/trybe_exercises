import './App.css';
import Pokemons from './Data';
import PokemoonCard from './PokemonCard';

function App() {
  return (
    <div className = 'container'>
      <h1>Pokedex</h1>
      <div className = 'deck-pokemons'>
        {Pokemons.map(({ name, type, averageWeight, image, id }) => (
          <PokemoonCard 
            Key = {id}
            name = {name}
            type = {type}
            averageWeight = {averageWeight}
            image = {image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
