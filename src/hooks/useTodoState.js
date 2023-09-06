import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './uselocalStorageState';
import { useState } from 'react';
import Frog from '../assets/frog.mp3';
import Completed from '../assets/completed.mp3';
const useTodoState = (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
  const [audioPlayed, setAudioPlayed] = useState(false);
  console.log('audioPlayed', audioPlayed)
  const handleStartClick = () => {
    // if (!audioPlayed) {
      const audio = new Audio(Frog);
      setAudioPlayed(true);
      audio.play();
    // }
  };
  const handleCompleted = () => {
    // if (!audioPlayed) {
      const audio = new Audio(Completed);
      setAudioPlayed(true);
      audio.play();
    // }
  };
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos(() => [
        ...todos,
        {
          id: uuidv4(),
          title: newTodoText,
          completed: false,
        },
      ]);
    },
    removeTodo: (todoId) => {
      //filter out removed todo
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      handleStartClick();
      // call setTodos with new todos array
      setTodos(() => updatedTodos);
    },
    toggleTodo: (todoId) => {
      handleCompleted();
      setTodos((oldTodos) =>
        oldTodos.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    editTodo: (todoId, newTitle) => {
      if (!newTitle) return;
      setTodos((oldTodos) =>
        oldTodos.map((todo) =>
          todo.id === todoId ? { ...todo, title: newTitle } : todo
        )
      );
    },
  };
};
export default useTodoState;
