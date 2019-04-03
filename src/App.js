import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () => 
(<nav>
  <a className="left" href="#app">Todo App</a>
</nav>
)

class App extends Component {
  render() {
    return (
      <>
        <Nav />
      </>
    );
  }
}

export default App;
