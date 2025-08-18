import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App.jsx
function App() {
  const name = "민규";
  return (
    <div>
      <h1>Hello React!</h1>
      <p>{name}님, 리액트 세계에 오신 것을 환영합니다 🎉</p>
    </div>
  );
}
export default App;
