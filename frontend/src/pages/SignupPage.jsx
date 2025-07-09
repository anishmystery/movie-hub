import axios from "axios";
import { useEffect } from "react";

function SignupPage() {
  useEffect(() => {
    async function signup() {
      try {
        const res = await axios.get("http://localhost:5001/api/auth/signup");
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    signup();
  }, []);
  return (
    <div>
      <h1>Signup</h1>
    </div>
  );
}

export default SignupPage;
