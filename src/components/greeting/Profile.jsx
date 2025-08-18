function Profile({ name, major, hobby }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>전공: {major}</p>
      <p>취미: {hobby}</p>
    </div>
  );
}
export default Profile;
