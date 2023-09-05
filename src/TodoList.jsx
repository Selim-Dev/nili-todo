import { Paper, List, Divider } from '@mui/material';

import React, { useContext } from 'react';
import Todo from './Todo';
import { TodosContext } from './contexts/todoContext';

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodosContext);

  if (todos.length > 0)
    return (
      <Paper>
        <List>
          {todos?.map((todo, index) => (
            <div key={todo.id}>
              <Todo removeTodo={removeTodo} {...todo} />
              {todos.length > index + 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
