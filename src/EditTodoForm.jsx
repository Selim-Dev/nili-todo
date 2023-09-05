import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todoContext';
const EditTodoForm = ({ id, title, toggleIsEditing }) => {
  const [value, handleChange, reset] = useInputState(title);
  const { editTodo } = useContext(TodosContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    editTodo(id, value);
    toggleIsEditing();
    reset();
  };
  return (
    <>
      <form
        style={{ marginLeft: '1rem', width: '100%' }}
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          value={value}
          onChange={handleChange}
          fullWidth
          label="Edit Todo"
          autoFocus
        />
      </form>
    </>
  );
};

export default EditTodoForm;
