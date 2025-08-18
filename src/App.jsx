import './App.css'
import Hello from './Hello';
import Profile from "./Profile";
import Welcome from "./Welcome";   
import { useState } from "react"; // ✅ useState 사용

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
  // 60점 이상이면 합격, 미만이면 불합격 표시
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

// App.jsx
function App() {
  function handleClick() {   
    alert("버튼이 클릭되었습니다!");  
  }

  const [isLogin, setIsLogin] = useState(true);     // 로그인 상태
  const [hasMessage, setHasMessage] = useState(false); // 메시지 상태
  const name = "민규";

  return (
    <div>
      <h4>Welcome.jsx</h4>
      <Welcome name="민규" />    
      
      <h4>Hello.jsx</h4>
      <Hello name={name} />
      <p>React와 Vite를 사용하여 개발 중입니다1.</p>
      <Hello name="민수" />
      <p>React와 Vite를 사용하여 개발 중입니다2.</p>

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

export default App;
