import React, { useState } from "react";

function List({ todos, setTodos, hide }) {
  const [editText, setEditText] = useState("");
  const [editingMode, setEditingMode] = useState(false);
  const [id,setId] = useState()

  const checkTodo = (e) => {
    let newTodos = todos.map((todo) => {
      if (parseInt(todo.id) === parseInt(e.target.id)) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (e) => {
    setTodos(
      todos.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id))
    );
  };

  const isComplated = (e) => {
    if (e.checked === true && hide === "All") {
      return "completed";
    } else if (e.checked === true && hide === "Active") {
      return "completed hidden";
    } else if (e.checked === false && hide === "Completed") {
      return "hidden";
    }
  };
  const editingTodo = (e) => {
    setId(Number(e.target.id))
    setEditingMode(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
   

    if (editText.trim() === "") {
      return false;
    }

    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.todo = editText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos",JSON.stringify(todos))

     setEditingMode(false)
  };

  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} id={todo.id} className={isComplated(todo)}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={todo.checked}
                id={todo.id}
                onClick={checkTodo}
              />
              {todo.id === id && editingMode ? (
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    className="new-todo"
                    autoFocus
                    defaultValue={todo.todo}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </form>
              ) : (
                <label id={todo.id} onClick={editingTodo}>{todo.todo}</label>
              )}
              <button
                className="destroy"
                id={todo.id}
                onClick={deleteTodo}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
