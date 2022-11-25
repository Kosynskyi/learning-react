import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, deleteTodo, onToggleCompleted }) => (
  <>
    <p>Общее кол-во todo: {todos.length}</p>
    <p>
      Количество выполненых:{' '}
      {/* {todos.filter(({ completed }) => completed).length} */}
      {todos.reduce((acc, item) => (item.completed ? acc + 1 : acc), 0)}
    </p>
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => {
        return (
          <li className="TodoList__item" key={id}>
            <input
              type="checkbox"
              className="TodoList__checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />

            <p className="TodoList__text">{text}</p>
            <button type="button" onClick={() => deleteTodo(id)}>
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  </>
);

export default TodoList;
