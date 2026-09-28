import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      setMessage(response.data.message);

      console.log("FULL LOGIN RESPONSE:", response.data);
      console.log("Logged in user:", response.data.user);
      console.log("JWT Token generated");

    } catch (error) {
      console.error(error);

      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Unable to connect to the server.");
      }
    }
  }

  return (
    <main>
      

      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

        <Link className="btn" to="/register">
          Create Account
        </Link>

      </form>

      {message && <p>{message}</p>}

      {error && <p>{error}</p>}
    </main>
  );
}

export default Login;