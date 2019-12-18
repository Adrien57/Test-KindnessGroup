// == Import : npm
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

// == Import : local
import './pokemon.scss';

// Composant

class Pokemon extends React.Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoading: true,
    
  };

  componentDidMount() {
    const { name, url } = this.props;

    // const pokemonIndex = url.split('/')[url.split('/').length - 2];
    // const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name });
  }

  render() {

    return (
      <Card>
        <Image src={this.state.imageUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.state.name}</Card.Header>
        </Card.Content>
      </Card>

      

    );
  }
}
export default Pokemon;
