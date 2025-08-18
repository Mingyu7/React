function ScoreList() {
  const scores = [
    { id: 1, name: "철수", score: 85 },
    { id: 2, name: "영희", score: 45 },
    { id: 3, name: "민수", score: 70 },
  ];
  return (
    <div>
      <h4>시험 결과</h4>
      <ul>
        {scores.map((s) => (
          <li key={s.id}>
            {s.name} : {s.score}점 → {s.score >= 60 ? "합격 🎉" : "불합격 ❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScoreList;
