import { Link } from 'react-router-dom';
import ThemeToggleButton from '../features/ThemeToggleButton';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <h1 className="app-title">MyReactApp</h1>
        </Link>
        <div className="header-right-section">
          <nav className="app-nav">
            <Link to="/">Home</Link>
            <Link to="/todo">Todo List</Link>
          </nav>
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}

export default Header;