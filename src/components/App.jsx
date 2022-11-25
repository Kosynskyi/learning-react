import { Component } from 'react';
import shortid from 'shortid';
import TodoList from './TodoList';
import Form from './Form';
import TodoEditor from './TodoEditor';
import Filter from './Filter';
import initialTodos from '../todos.json';

export class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    return this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(item => item.id !== id),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(item =>
        item.id === todoId ? { ...item, completed: !item.completed } : item
      ),
    }));

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todoId === todo.id) {
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   }),
    // }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return todos.filter(item =>
      item.text.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={this.getVisibleTodos()}
          deleteTodo={this.deleteTodo}
          totalTodo={this.totalTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
