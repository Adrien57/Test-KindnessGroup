// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Pokemon from 'src/components/Pokemon';
import PokemonList from 'src/components/PokemonList';

// == Composant
class App extends React.Component {
  state = {
    items:[],
    loading: true,

  }

  render() {
    return (
      <div className="app">
        <PokemonList />
        <Pokemon />
      </div>
    );
  }
}

// == Export
export default App;
