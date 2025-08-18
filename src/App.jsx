import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Styles
import './App.css';

// Layout
import Header from './components/layout/Header';
import Card from './components/ui/Card';

// Page Components
import TodoList from "./TodoList";
import LoginStatus from "./components/features/LoginStatus";
import Notice from "./components/features/Notice";
import SubjectList from "./components/features/SubjectList";
import ScoreList from "./components/features/ScoreList";
import Profile from "./components/greeting/Profile";
import Welcome from "./components/greeting/Welcome";

// --- Page Definitions ---

function HomePage() {
  return (
    <div>
      <h2 className="page-title">Welcome to ReactStudy</h2>
      <div className="card-grid">
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
          <LoginStatus />
        </Card>
        <Card>
          <Notice />
        </Card>
        <Card>
          <SubjectList />
        </Card>
        <Card>
          <ScoreList />
        </Card>
      </div>
    </div>
  );
}

function TodoPage() {
  return (
    <div>
      <h2 className="page-title">My Todo List</h2>
      {/* The TodoList component will now be rendered inside a Card */}
      <Card>
        <TodoList />
      </Card>
    </div>
  );
}


// --- Main App Structure ---

function App() {
  return (
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
  );
}

export default App;