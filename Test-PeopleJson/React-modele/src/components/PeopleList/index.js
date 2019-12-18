import React from 'react';
import { Card } from 'semantic-ui-react';

// == Import : local
import './peoplelist.scss';

//Import du fichier Json du test
import Data from 'src/data.json';

class PeopleList extends React.Component {

  state= {
    datas: Data,
  }

  render() {
    return (
      <div className="people-list">
        {this.state.datas.map(data => (
          <Card
            key={data._id}
            className="people-card"
            image={data.picture}
            header={data.name}
            meta={data.email}
            description={data.phone}
          />
        ))}
      </div>
    );
  }
}

export default PeopleList;
