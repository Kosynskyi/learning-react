import Counter from './Counter';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import TodoList from './TodoList';
import { Component } from 'react';

const ColorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: false },
      { id: 'id-2', text: 'Разобраться с React Router', completed: true },
      { id: 'id-3', text: 'Пережить Redux', completed: true },
    ],
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(item => item.id !== id),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={ColorPickerOptions} />
        <TodoList
          todos={todos}
          deleteTodo={this.deleteTodo}
          totalTodo={this.totalTodo}
        />
      </div>
    );
  }
}
