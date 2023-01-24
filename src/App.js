import "./App.css";
import React from "react";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso de react", completed: false },
  { text: "Llorar por la llorona", completed: false },
];

function App() {
  return (
    <React.Fragment>
      {/* <TodoCounter /> */}
      <h2>Has completado 2 de 3 TODOs</h2>
      {/* <TodoSearch /> */}
      <input placeholder="Cebolla" />

      {/* <TodoList>
        {todos.map((todo) => (
          <TodoItem />
        ))}
      </TodoList> */}
      {/* <CreateTodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
