import logo from './logo.svg';
import './App.css';

import * as data from './pokemon.json';
import FilteredPokemon from './FilteredPokemon';

const App = () => {
  return (
    <FilteredPokemon pokemons={data.default} />
  );
};

export default App;
