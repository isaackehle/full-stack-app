// pages/register.tsx

import { useState } from "react";
import axios from "axios";
import "../app/globals.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", { username, email, password });
      alert("Registration successful!");
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.log(err);
    }
  };

  return (
    <div className="mx-auto flex max-w-xl items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <h1>Register</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <label className="flex-2">
            <span className="w-md">Username:</span>
            <input
              type="text"
              value={username}
              className="ml-8 border-2 border-solid rounded-sm w-md"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>

          <label className="flex-2 w-xl">
            <span className="w-md">Email:</span>
            <input
              type="email"
              value={email}
              className="ml-8 border-2 border-solid rounded-sm w-lg"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="flex-4">
            <span className="w-md">Password:</span>
            <input
              type="password"
              className="ml-8 border-2 border-solid rounded-sm w-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>

        <button className="border-2 border-solid rounded-sm" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
