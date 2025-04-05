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
    <nav className="w-full bg-black text-yellow-400 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-3 sm:mb-0">CRICBET99</h1>
        <div className="space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
          <button
            onClick={toLoginpage}
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
          >
            Login
          </button>
          <button
            onClick={handleSignupRedirect}
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
          >
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
