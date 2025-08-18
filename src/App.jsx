import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Hello from './Hello';
import Profile from "./Profile";
import Welcome from "./Welcome";
import TodoList from "./TodoList";

// LoginStatus 컴포넌트
function LoginStatus({ isLogin }) {
  return (
    <div>
      {isLogin ? <p>로그인 상태입니다 ✅</p> : <p>로그아웃 상태입니다 ❌</p>}
    </div>
  );
}

// Notice 컴포넌트
function Notice({ hasMessage }) {
  return (
    <div>
      <h2>공지사항</h2>
      {hasMessage && <p>새로운 메시지가 있습니다!</p>}
    </div>
  );
}

// SubjectList 컴포넌트
function SubjectList() {
  const subjects = ["리액트", "HTML", "JSP", "데이터베이스"];
  return (
    <div>
      <h2>이번 학기 수강 과목</h2>
      <ul>
        {subjects.map((sub, i) => (
          <li key={i}>{sub}</li>
        ))}
      </ul>
    </div>
  );
}

// ScoreList 조건부 표시
function ScoreList() {
  const scores = [
    { id: 1, name: "철수", score: 85 },
    { id: 2, name: "영희", score: 45 },
    { id: 3, name: "민수", score: 70 },
  ];
  return (
    <div>
      <h2>시험 결과</h2>
      <ul>
        {scores.map((s) => (
          <li key={s.id}>
            {s.name} : {s.score}점 → {s.score >= 60 ? "합격 🎉" : "불합격 ❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 메인 페이지 컴포넌트
function MainPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [hasMessage, setHasMessage] = useState(false);
  const name = "민규";
  const navigate = useNavigate();

  const handleClick = () => alert("버튼이 클릭되었습니다!");

  return (
    <div>
      <h1>메인 페이지</h1>
      {/* TodoList 페이지로 이동 버튼 */}
      <button onClick={() => navigate("/todo")}>TodoList로 이동</button>

      <h4>Welcome.jsx</h4>
      <Welcome name="민규" />    

      <h4>Hello.jsx</h4>
      <Hello name={name} />
      <Hello name="민수" />

      <h4>Profile.jsx</h4>
      <Profile name="민수" major="디자인" hobby="독서"/>
      <Profile name="민규" major="컴퓨터공학" hobby="게임" />

      <h4>handleClick</h4>
      <button onClick={handleClick}>클릭</button>     

      <h4>LoginStatus</h4>
      <LoginStatus isLogin={isLogin} />
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "로그아웃" : "로그인"}
      </button>

      <h4>Notice</h4>
      <Notice hasMessage={hasMessage} />
      <button onClick={() => setHasMessage(!hasMessage)}>
        {hasMessage ? "메시지 지우기" : "메시지 받기"}
      </button>

      <h4>SubjectList</h4>
      <SubjectList />

      <h4>ScoreList</h4>
      <ScoreList />
    </div>
  );
}

// TodoList 화면에서 메인 페이지로 돌아가는 버튼 포함
function TodoPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>TodoList 페이지</h1>
      <button onClick={() => navigate("/")}>메인 페이지로 돌아가기</button>
      <TodoList />
    </div>
  );
}

// App.jsx
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
