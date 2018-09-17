import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarInstance from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarInstance />
      </div>
    );
  }
}

export default App;
