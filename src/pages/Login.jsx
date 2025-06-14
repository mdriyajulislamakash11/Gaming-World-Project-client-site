import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const { googleLogin, login } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });

    // logIn
    login(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      </form>

      <div>

        <p>Please Register Now... <Link className="font-bold text-blue-400" to="/register">Go To Register</Link></p>

        <button onClick={googleLogin} className="">
          google login
        </button>
      </div>
    </div>
  );
};

export default Login;
