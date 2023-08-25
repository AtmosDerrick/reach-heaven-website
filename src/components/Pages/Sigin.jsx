import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);
  const [redirect, setRedirect] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, username, password)
      .then(() => {
        setLogin(true);
        setRedirect("/admin");
        console.log("login success");
        setTimeout(() => {
          setLogin(false);
          console.log("set time out");
        }, 1000);
      })
      .catch((err) => {
        setError(true);
        setTimeout(() => {
          setError(false);
          console.log("set time out");
        }, 4000);
      });
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className=" flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white  shadow p-8 w-full px-4 md:px-0  md:w-1/2 mx-auto rounded-md">
        <div className="w-full flex justify-center">
          <img
            src="./images/RHCI_logo.png"
            alt="Reach Heaven Church Logo"
            className="w-16"
          />
        </div>
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-sky-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-sky-500 hover:text-sky-800"
              href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
