import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["리액트 공부하기", "운동하기"]);
  const [newTodo, setNewTodo] = useState(""); // 입력값 상태

  const handleAdd = () => {
    if (newTodo.trim() === "") return; // 빈 값 방지
    setTodos([...todos, newTodo]);     // 배열 복사 + 새로운 값 추가
    setNewTodo(""); // 입력창 초기화
  };

  return (
    <div>
      <h2>할 일 목록</h2>
      <input type="text"
        value={newTodo}
        placeholder="할 일을 입력하세요"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>추가</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;