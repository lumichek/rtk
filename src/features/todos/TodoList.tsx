import React, { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    setNewTodo('');
  }, [setNewTodo]);
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }, [setNewTodo]);

  return (
    <main>
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Enter a new todo item</label>
        <div className="new-todo">
          <input
            type="text"
            id="new-todo"
            value={newTodo}
            onChange={handleChange}
            placeholder="Enter new todo"
          />
        </div>
        <button className="submit">
          <FontAwesomeIcon icon={faUpload} />
        </button>
      </form>
    </main>
  );
}

export default TodoList;
