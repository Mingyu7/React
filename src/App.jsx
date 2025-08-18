import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// 전역 스타일
import './App.css';

// 레이아웃
import Header from './components/layout/Header';
import Card from './components/ui/Card';

// 페이지 컴포넌트
import TodoList from "./TodoList";
import LoginStatus from "./components/features/LoginStatus";
import Notice from "./components/features/Notice";
import SubjectList from "./components/features/SubjectList";
import ScoreList from "./components/features/ScoreList";
import Profile from "./components/greeting/Profile";
import Welcome from "./components/greeting/Welcome";

// --- 페이지 정의 ---

function HomePage() {
  return (
    <div>
      <h2 className="page-title">Welcome to ReactStudy</h2>
      <div className="card-feed">
        <Card>
          <Welcome name="민규" />
        </Card>
        <Card>
          <Profile name="민규" major="컴퓨터공학" hobby="게임" />
        </Card>
        <Card>
          <Profile name="민수" major="디자인" hobby="독서"/>
        </Card>
        <Card>
          <SubjectList />
        </Card>
        <Card>
          <ScoreList />
        </Card>
        <Card>
          <LoginStatus />
        </Card>
        <Card>
          <Notice />
        </Card>
      </div>
    </div>
  );
}

function TodoPage() {
  return (
    <div>
      <h2 className="page-title">My Todo List</h2>
      {/* 이제 TodoList 컴포넌트는 Card 컴포넌트 안에서 렌더링됩니다 */}
      <Card>
        <TodoList />
      </Card>
    </div>
  );
}


// --- 메인 앱 구조 ---

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/todo" element={<TodoPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
