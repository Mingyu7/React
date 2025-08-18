import './TodoList.css';
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 디자인 시스템 적용하기", completed: true },
    { id: 2, text: "새로운 기능 추가하기", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ]);
    setNewTodo("");
  };

  return (
    <div className="todolist-wrapper">
      <h1>Todo List</h1>
      <div className="todo-input-section">
        <input
          type="text"
          className="todo-input"
          value={newTodo}
          placeholder="새로운 할 일을 입력하세요..."
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); }}
        />
        <button className="add-btn" onClick={handleAdd}>추가</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span className="todo-text" onClick={() => handleToggle(todo.id)}>
              {todo.text}
            </span>
            <button className="delete-item-btn" onClick={() => handleDelete(todo.id)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
