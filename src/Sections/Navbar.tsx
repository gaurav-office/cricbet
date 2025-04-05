import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleSignupRedirect = (): void => {
    window.location.href = "https://api.whatsapp.com/send?phone=1234567890"; // Replace with your number
  };

  const toLoginpage = () => {
    navigate("/login");
  };

  return (
    <nav className="w-full bg-black text-yellow-400 px-3 py-2">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        <h1 className="text-xl sm:text-3xl font-bold">CRICBET99</h1>
        <div className="flex space-x-2 sm:space-x-4">
          <button
            onClick={toLoginpage}
            className="text-xs sm:text-base bg-yellow-400 text-black px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-yellow-300 transition"
          >
            Login
          </button>
          <button
            onClick={handleSignupRedirect}
            className="text-xs sm:text-base bg-yellow-400 text-black px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-yellow-300 transition"
          >
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
