import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-800 to-emerald-900 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md mt-10">
        <h2 className="text-center text-xl font-semibold text-amber-800 mb-6">
          LOGIN{" "}
          <span role="img" aria-label="pin">
            📌
          </span>
        </h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="User Name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>

        <button className="w-full bg-amber-800 text-white py-2 rounded hover:bg-amber-700 mb-2">
          Login{" "}
          <span role="img" aria-label="login">
            ➡️
          </span>
        </button>

        <p className="text-xs text-center text-gray-600 mt-2">
          This site is protected by reCAPTCHA and the Google
          <span className="text-red-600"> Privacy Policy </span>
          and
          <span className="text-red-600"> Terms of Service </span>
          apply.
        </p>

        <button className="w-full mt-4 bg-amber-800 text-white py-2 rounded hover:bg-amber-700">
          Login With Demo{" "}
          <span role="img" aria-label="login">
            ➡️
          </span>
        </button>
      </div>
    </div>
  );
}
