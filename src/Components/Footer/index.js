

function Footer({ todos, setTodos, setHide }) {
  const unCompleted = todos.filter((check) => check.checked === false);
  const handleClearCompleted = (e) => {
    setTodos(
      todos.filter((todo) =>todo.checked === false)
    );
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length}</strong>
        {unCompleted.length > 1 ? " items left" : " item left"}
      </span>

      <ul className="filters">
        <li>
          <button
            className="footer_button"
            onClick={() => {
              setHide("All");
            }}
            id="All"
          >
            All
          </button>
        </li>
        <li>
          <button
            className="footer_button"
            onClick={() => {
              setHide("Active");
            }}
            id="Active"
          >
            Active
          </button>
        </li>
        <li>
          <button
            className="footer_button"
            onClick={() => {
              setHide("Completed");
            }}
            id="Completed"
          >
            Completed
          </button>
        </li>
      </ul>

      <button onClick={handleClearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
