import React from "react";

const register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
    };
    fetch("http://localhost:8080/", option).then(
      () => (window.location.href = "/upload")
    );

    return console.log(e.target[0].value);
  };

  return (
    <div style={{ marginTop: "10%" }} className="App">
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={{ marginTop: "5%" }}>
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
            Register
          </button>
        </p>
        <a href="/register">new member ?</a>
      </form>
    </div>
  );
};

export default register;
