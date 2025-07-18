import axios from "axios";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  async function login(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form" onSubmit={login}>
        <input type="email" placeholder="Email" onChange={handleChangeEmail} />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChangePassword}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
