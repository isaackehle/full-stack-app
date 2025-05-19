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
    <div className="mx-auto flex flex-col  max-w-xl items-center gap-x-4 rounded-xl bg-white p-6 shadow-sm outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <div className="flex-4 pb-8">
        <h1 className="text-4xl font-extrabold dark:text-white">Register</h1>
      </div>

      {error && <p>{error}</p>}
      <div className="flex-4 pt-8 px-16">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <label className="flex-4">
              <span className="w-xs pl-2 pr-6 py-8">Username:</span>
              <input
                type="text"
                value={username}
                className="border-2 border-solid rounded-sm w-2xs"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>

            <label className="flex-4">
              <span className="w-xs pl-2 pr-6 py-8">Email:</span>
              <input
                type="email"
                value={email}
                className="border-2 border-solid rounded-sm w-2xs"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label className="flex-4">
              <span className="w-xs pl-2 pr-6 py-8">Password:</span>
              <input
                type="password"
                className="border-2 border-solid rounded-sm w-2xs"
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
    </div>
  );
};

export default Register;
