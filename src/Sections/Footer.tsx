import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" px-4 md:px-20 py-10 bg-gradient-to-t from-black via-black to-orange-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-sm max-w-md">
              Welcome to Cricbet99, the go-to website for quality betting in
              cricket and all-round gambling. On Cricbet99, cricket enthusiasts
              can find over 1000 games and a safe, secure, and user-friendly
              platform. Users can enjoy 24*7 customer support.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>&raquo; Home</li>
              <li>&raquo; Login</li>
              <li>&raquo; Registration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white rounded-full p-2">
                <i className="fab fa-facebook text-black"></i>
              </a>
              <a href="#" className="bg-white rounded-full p-2">
                <i className="fab fa-instagram text-black"></i>
              </a>
              <a href="#" className="bg-white rounded-full p-2">
                <i className="fab fa-linkedin text-black"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
