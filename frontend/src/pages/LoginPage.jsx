import axios from "axios";
import { useEffect } from "react";

function LoginPage() {
  useEffect(() => {
    async function login() {
      try {
        const res = await axios.get("http://localhost:5001/api/auth/login");
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    login();
  }, []);
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}

export default LoginPage;
