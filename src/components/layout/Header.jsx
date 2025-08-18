import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <h1 className="app-title">MyReactApp</h1>
        </Link>
        <nav className="app-nav">
          <Link to="/">Home</Link>
          <Link to="/todo">Todo List</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
