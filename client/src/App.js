import React, { Component } from 'react';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // make api call to the rails side to get all the todos
  }

  addTodo = () => {
    // make an api call to add item in the database
    // add the todo into the state
  }

  updateTodo = () => {
    // make an api call to update a todo in the rails side
    // update the todo in the state
  }

  deleteTodo = () => {
    // make an api call to delete a todo in the rails side
    // delete the todo from our state
  }
  
  render() {
    return(
      <>
      </>
    )
  }
}

export default App;
