import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const handleSignupRedirect = (): void => {
    window.location.href = "https://api.whatsapp.com/send?phone=1234567890"; // Replace with your number
  };

  const navigate = useNavigate();
  const toLoginpage = () => {
    navigate("/Login");
  };
  return (
    <div className="w-full flex justify-between items-center p-4 bg-black text-yellow-400">
      <h1 className="text-3xl font-bold ml-10">CRICBET99</h1>
      <div className="space-x-4 mr-10">
        <button
          onClick={toLoginpage}
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
        >
          Login
        </button>
        <button
          onClick={handleSignupRedirect}
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
