import { useState } from 'react';

function LoginStatus() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <h4>Login Status</h4>
      {isLogin ? <p>로그인 상태입니다 ✅</p> : <p>로그아웃 상태입니다 ❌</p>}
      <button onClick={() => setIsLogin(!isLogin)} className="button">
        {isLogin ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
}

export default LoginStatus;
