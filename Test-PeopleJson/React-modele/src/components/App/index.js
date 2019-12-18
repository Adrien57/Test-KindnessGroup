// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
//ma list
import PeopleList from 'src/components/PeopleList';

// == Composant
const App = () => (
  <div id="app">
    <PeopleList />
  </div>
);

// == Export
export default App;
