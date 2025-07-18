import axios from "axios";
import { useState } from "react";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  async function signup(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/signup",
        { name, email, password },
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
    <div className="signup-page">
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={signup}>
        <input type="text" placeholder="Name" onChange={handleChangeName} />
        <input type="email" placeholder="Email" onChange={handleChangeEmail} />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChangePassword}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
