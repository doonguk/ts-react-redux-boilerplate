import React from 'react';
import TodoList from "./components/Todos/TodoList"
import TodoInsert from "./components/Todos/TodoInsert"

const App: React.FC = () => {
  return (
    <>
      <TodoInsert/>
      <TodoList/>
      </>
  );
}

export default App;
