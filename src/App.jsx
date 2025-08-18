import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello';
import Profile from "./Profile";
import Welcome from './Wellcome';

// App.jsx
function App() {
  const name = "민규";
  return (
    <div>
      <h4>Welcome.jsx</h4>
      <Welcome name="민규" />
    
      
      <h4> Hello.jsx</h4>
      <Hello name={name} />
      <p>React와 Vite를 사용하여 개발 중입니다1.</p>
      <Hello name="민수" />
      <p>React와 Vite를 사용하여 개발 중입니다2.</p>

      <h4>Profile.jsx</h4>
      <Profile name="민수" major="디자인" hobby="독서"/>
      <Profile name="민규" major="컴퓨터공학" hobby="게임" />
      
    </div>
  );
}
export default App;
