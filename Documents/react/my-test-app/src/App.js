import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './modules/home'
import Contact from './modules/contact'
import About from './modules/about'
import Nav from './components/Nav'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path='/'component={Home}/>
          <Route path='/about'component={About}/>
          <Route path='/contact'component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;





