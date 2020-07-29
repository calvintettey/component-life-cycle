import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  state = {
    todos: [],
    mounted: 'false',
  }

  componentDidMount() {
    this.setState({
      mounted: 'true',
    })

    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => this.setState({todos: data}))
    .catch((error)=>console.log(error));

  }
  
  render() {
    return (
      <div className="App">
        <h1>Component Life Cycle</h1>
        <h3>{this.state.mounted}</h3>
        {this.state.todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
        
      </div>
    )
  }

}

export default App;
