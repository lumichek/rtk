import React, {
  ChangeEvent, SyntheticEvent, useCallback, useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useGetTodosQuery } from '../../api/apiSlice';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

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
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={handleChange}
          placeholder="Enter new todo"
        />
        <button className="submit" type="submit">
          <FontAwesomeIcon icon={faUpload} />
        </button>
      </form>
      {
        isLoading && (
          <p>Loading...</p>
        )
      }
      {
        isSuccess && (
          JSON.stringify(todos)
        )
      }
      {
        isError && (
          <p>{JSON.stringify(error)}</p>
        )
      }
    </main>
  );
}

export default TodoList;
