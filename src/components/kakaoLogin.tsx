const Login = () => {
  const onClickHandle = () => {
    window.Kakao.Auth.authorize();
  };
  return (
    <div>
      <h3>Login</h3>
      <button onClick={onClickHandle}>kakao login btn</button>
      <h3></h3>
    </div>
  );
};

export default Login;
