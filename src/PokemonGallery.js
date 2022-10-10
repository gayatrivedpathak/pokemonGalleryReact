import Pokemon from "./Pokemon";

const PokemonGallery = ({ pokemons }) => {
  const pokemonIds = new Array(10).fill(1).map((x, i) => i + 1);

  const pokemonElements = pokemons.map(
    ({ name, img }, index) => <Pokemon name={name} imgUrl={img} key={index + 1} />);

  return (
    <div style={{
      display: 'flex',
      width: "1000px",
      flexWrap: "wrap",
      gap: '5px',
      margin: '10px auto'
    }}>
      {pokemonElements}
    </div >
  )
};

export default PokemonGallery;