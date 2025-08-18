import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello';

// App.jsx
function App() {
  const name = "민규";
  return (
    <div>
      <h1>안녕하세요! 저는 {name}입니다.</h1>
      <p>전공: 컴퓨터공학</p>
      <p>취미: 게임 개발,야구보기</p> 

      <Hello name={name} />
      <p>React와 Vite를 사용하여 개발 중입니다1.</p>
      <Hello name="민수" />
      <p>React와 Vite를 사용하여 개발 중입니다2.</p>
    </div>
  );
}
export default App;
