import React, { useContext } from 'react';
import useToggleState from './hooks/useToggle';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  // ListItemSecondaryAction,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TodosContext } from './contexts/todoContext';
import EditTodoForm from './EditTodoForm';
const Todo = ({ id, title, completed }) => {
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  const [isEditing, toggleIsEditing] = useToggleState(false);
  return (
    <>
      <ListItem
        
        style={{ height: '64px' }}
        secondaryAction={
          isEditing ? (
            false
          ) : (
            <>
              <IconButton
                onClick={toggleIsEditing}
                edge="end"
                aria-label="Edit"
                color="primary"
              >
                {' '}
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => removeTodo(id)}
                edge="end"
                aria-label="Delete"
                color="error"
              >
                {' '}
                <DeleteIcon />
              </IconButton>{' '}
            </>
          )
        }
      >
        {isEditing ? (
          <EditTodoForm
            id={id}
            title={title}
            toggleIsEditing={toggleIsEditing}
          />
        ) : (
          <>
            <Checkbox
              onClick={() => toggleTodo(id)}
              tabIndex={-1}
              checked={completed}
              color="success"
            />
            <ListItemText
              style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
              {title}
            </ListItemText>{' '}
          </>
        )}
      </ListItem>
    </>
  );
};

export default Todo;
