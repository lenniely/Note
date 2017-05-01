import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title.js'
import LikeButton from './LikeButton'
import UserTest from './UserTest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Title />
        <UserTest />
        <LikeButton  likedText='已赞' />
      </div>
    );
  }
}

export default App;
