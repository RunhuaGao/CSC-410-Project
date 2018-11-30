import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Live from './components/Live';
import ImgHomepage from './components/ImgHomepage';
import Timer from './components/Timer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <NavBar />    
        <ImgHomepage />
        <Live />
        <Timer />
      </div>

    );
  }
}



export default App;
