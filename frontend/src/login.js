import "./App.css";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
    };
    fetch("http://localhost:8080/checkUser", option)
      .then(() => (window.location.href = "/upload"))
      .catch((e) => console.log(e));

    return console.log(e.target[0].value);
  };

  return (
    <div style={{ marginTop: "10%" }} className="App">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin} style={{ marginTop: "5%" }}>
        <p>
          <label>Username</label>
          <br />
          <input type="text" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" required />
        </p>
        <p>
          <button style={{ marginTop: "1%" }} type="submit">
            Login
          </button>
        </p>
        <a href="/register">new member ?</a>
      </form>
    </div>
  );
}

export default Login;
