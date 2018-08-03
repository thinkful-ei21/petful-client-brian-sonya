import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'





const dog = {
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'golden example',
  name: 'Z',
  sex: 'M',
  age: 35,
  breed: 'G',
  story: 'O'
}

const cat = {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription: 'Orange example.',
  name: 'Fl',
  sex: 'F',
  age: 26,
  breed: 'B',
  story: 'Tht'
}

class App extends Component {
constructor(props){
super(props)
}




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Dashboard cat={cat} dog={dog}/>


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
