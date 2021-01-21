import React from 'react';
import { Router } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

import Routes from './routes';
import history from './history';

import { AuthProvider } from "./Context/AuthContext";

mapboxgl.accessToken = 'pk.eyJ1IjoiZmxwYmVja2VyIiwiYSI6ImNrNTQyY3p4ZTBmNHMzbG5ra2o1a20wZDAifQ.brqgq74Z8vsnAdc0GUIjWQ';

class MyMap extends React.Component {

}

function App() {
  return (
    <div>
      <AuthProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
