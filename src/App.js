import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () => 
(<nav>
  <a className="left" href="#app">Todo App</a>
</nav>
)

class App extends Component {

  state = {
    todos: [],
    newTodo: ""
  }

  render() {
    return (
      <>
        <Nav />
        <div className="row box">
          <input type="text" placeholder="Write in here" onChange={e => {
            this.setState({newTodo: e.target.value})
          }}/>
          <button className="btn btn-primary" onClick={e => {
            this.setState(state => ({todos: state.todos.concat(state.newTodo)}))
          }}>Add Todo</button>
        </div>
        <div className="container">
          <div className="row">
            {
              this.state.todos.length === 0 && <div className="col-sm-12 text-center mt-5"><h3>Add your todos!</h3></div>
            }
            {
              this.state.todos.map(todo => (
              <div className="col-sm-12 col-lg-4">
                <div className="card">
                  <div className="top">
                    <span className="fas fa-times-circle" onClick={e => {
                      this.setState(state => ({todos: state.todos.filter(todoName => todoName != todo)}))
                    }} />
                  </div>
                  <div className="bottom"><h2>{todo}</h2></div>
                </div>
              </div>
              ))
            }
          </div>
        </div>
      </>
    );
  }
}

export default App;
