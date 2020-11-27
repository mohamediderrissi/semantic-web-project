import React, { Component, useState } from 'react';
import ReactMapGl from 'react-map-gl';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    viewport: {
      latitude: 45.4211,
      longitude: -75.6903,
      width: "100vw",
      height: "100vh",
      zoom: 10
    }
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js </code> and save to reload.
        </p>
        <div width="500px" height="400px">
          <ReactMapGl { ...this.state.viewport}
          mapStyle="mapbox://styles/jeuxconflit/cki0u2ojv2n5o1aluozw00egq" 
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => this.setState({viewport: viewport })}
          >
            
          </ReactMapGl>
        </div>
      </div>
    );
  }
}

export default App;
