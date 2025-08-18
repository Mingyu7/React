import './TodoList.css';
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["리액트 공부하기", "운동하기"]);
  const [newTodo, setNewTodo] = useState("");
  const [checked, setChecked] = useState([]);

  const handleCheck = (todo) => {
    if (checked.includes(todo)) {
      setChecked(checked.filter((t) => t !== todo));
    } else {
      setChecked([...checked, todo]);
    }
  };

  const handleDelete = () => {
    setTodos(todos.filter((todo) => !checked.includes(todo)));
    setChecked([]);
  };

  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div className="todo-container">
      <h2>할 일 목록</h2>
      <input
        type="text"
        value={newTodo}
        placeholder="할 일을 입력하세요"
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); }}
      />
      <button onClick={handleAdd}>추가</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={checked.includes(todo)}
              onChange={() => handleCheck(todo)}
            />
            {todo}
          </li>
        ))}
      </ul>
      <button
        className="delete-btn"
        onClick={handleDelete}
        disabled={checked.length === 0}
      >
        선택 항목 삭제
      </button>
    </div>
  );
}

export default TodoList;
