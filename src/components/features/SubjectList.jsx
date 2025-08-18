function SubjectList() {
  const subjects = ["리액트", "HTML", "JSP", "데이터베이스"];
  return (
    <div>
      <h4>이번 학기 수강 과목</h4>
      <ul>
        {subjects.map((sub, i) => (
          <li key={i}>{sub}</li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;
