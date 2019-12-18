// == Import : npm
import React from 'react';
import { Card, Icon, Image, CardGroup } from 'semantic-ui-react';
import axios from 'axios';

// == Import : local
import './pokemonlist.scss';
import Pokemon from 'src/components/Pokemon';
// Composant


class PokemonList extends React.Component {
    state={
      url: 'https://pokeapi.co/api/v2/pokemon/',
      pokemon: null,
    }

    componentWillMount() {
      this.getResultsFromApi();
      
        
    }

    getResultsFromApi =() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?')
        .then((response) => {
          console.log(response.data);
          this.setState({ pokemon: response.data.results });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    

    render() {
      return (
        <React.Fragment>
          {this.state.pokemon ? (
            <div className="row">
              {this.state.pokemon.map(pokemon => (
                <Pokemon
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              ))}
          
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </React.Fragment>
      );
    }
}


export default PokemonList;
