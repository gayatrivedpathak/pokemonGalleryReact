import React from "react";
import PokemonGallery from "./PokemonGallery";

const Input = (props) => {
  return <input
    onChange={(event) => props.onChange(event.target.value)}
    placeholder='Search'
    style={{
      width: '300px',
      padding: '5px',
    }}
  />;
};

class FilteredPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filterText) {
    this.setState((state) => ({ filterText }));
  }

  filter() {
    return this.props.pokemons.filter(
      ({ name }) => name.includes(this.state.filterText));
  }

  render() {
    return (<div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Input onChange={this.handleChange} />
      <PokemonGallery pokemons={this.filter()} />
    </div >);
  }
};

export default FilteredPokemon;
