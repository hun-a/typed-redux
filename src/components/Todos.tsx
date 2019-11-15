import React from 'react';
import todos, { Todo } from '../modules/todos';
import './TodoItem.css';

type TodoItemProps = {
  todo: Todo
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text">{todo.text}</span>
      <span className="remove">(X)</span>
    </li>
  );
}

type TodosProps = {
  todos: Todo[];
  onAddTodo: (text: string) => void;
  onToggleTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
};

function Todos({
  todos,
  onAddTodo,
  onToggleTodo,
  onRemoveTodo
}: TodosProps) {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
