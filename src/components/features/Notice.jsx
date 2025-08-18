import { useState } from 'react';

function Notice() {
  const [hasMessage, setHasMessage] = useState(false);
  return (
    <div>
      <h4>Notice</h4>
      {hasMessage && <p>새로운 메시지가 있습니다!</p>}
      <button onClick={() => setHasMessage(!hasMessage)} className="button">
        {hasMessage ? "메시지 지우기" : "메시지 받기"}
      </button>
    </div>
  );
}

export default Notice;
