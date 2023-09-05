import React, { useMemo } from 'react';
import useTodoState from '../hooks/useTodoState';
export const TodosContext = React.createContext();

export const TodosProvider = ({ children }) => {
  const initialTodos = [];
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodoState(initialTodos);
  // useEffect(() => {
  //   window.localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);
  const contextValue = useMemo(
    () => ({
      todos,
      addTodo,
      removeTodo,
      toggleTodo,
      editTodo,
    }),
    [todos, addTodo, removeTodo, toggleTodo, editTodo]
  );

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};
