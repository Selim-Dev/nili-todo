import { Paper, TextField } from '@mui/material';
import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todoContext';

const TodoForm = () => {
  const { addTodo } = useContext(TodosContext);

  const [value, handleChange, reset] = useInputState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    reset();
  };

  return (
    <div>
      <Paper className='z-50' style={{ margin: '1rem 0', padding: '0 1rem' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            fullWidth
            label="New Nimo 🤤"
            value={value}
            onChange={handleChange}
          />
        </form>
      </Paper>
    </div>
  );
};

export default TodoForm;
