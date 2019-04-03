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
        <div className="row box">
          <input placeholder="Write in here" /><button className="btn btn-primary">Add Todo</button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><span className="fas fa-times-circle" /></div>
                <div className="bottom"><h2>Wash Dishes</h2></div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><span className="fas fa-times-circle" /></div>
                <div className="bottom"><h2>Do Laundry</h2></div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><span className="fas fa-times-circle" /></div>
                <div className="bottom"><h2>Clean House</h2></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
