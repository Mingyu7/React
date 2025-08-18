import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ThemeToggleButton.css';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggleButton;
