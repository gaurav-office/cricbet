import { useState, useEffect, useRef } from "react";
import { hamburger, sjl } from "../assets";
import { navLinks } from "../constants";
import WhatsAppButton from "./WhatsAppButton";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
        setTeamDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="py-4 sm:px-16 px-8 absolute w-full z-50 font-montserrat mb-5">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img src={sjl} width={120} height={120} alt="Logo" />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-10">
          {navLinks.map((item) =>
            item.label === "Team" ? (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => setTeamDropdownOpen(true)}
                onMouseLeave={() => setTeamDropdownOpen(false)}
              >
                <Link
                  to={item.href}
                  className="font-montserrat  text-gray-700 text-lg hover:text-gray-900 transition-all"
                >
                  {item.label}
                </Link>
                {/* Dropdown Menu */}
                <ul
                  className={`absolute top-full left-0 mt-2 bg-gradient-to-b from-[#666D7D] to-[#2D3748] text-white shadow-lg rounded-lg w-48 transition-all duration-300 ease-in-out transform ${
                    teamDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {/* Pointer */}
                  <div className="absolute -top-2 left-4 w-4 h-4 bg-[#666D7D] rotate-45 transform origin-center"></div>
                  {item.subLinks.map((subItem) => (
                    <li key={subItem.label}>
                      <a
                        href={subItem.href}
                        className="block px-4 py-2 text-lg hover:bg-blue-600 rounded-lg transition-all"
                      >
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-gray-700 text-lg hover:text-gray-900 transition-all"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* WhatsApp Button and Hamburger */}
        <div className="flex items-center gap-4 min-w-36 justify-end">
          {/* WhatsApp Button for Desktop */}
          <div className="hidden lg:block">
            <WhatsAppButton />
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <img src={hamburger} alt="Menu" width={25} height={25} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        ref={dropdownRef}
        className={`absolute top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-gradient-to-b from-[#666D7D] to-[#2D3748] text-white shadow-lg rounded-lg transition-all duration-300 ease-in-out transform ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-end items-center px-6 py-4">
          <button
            className="text-white text-2xl hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            &times; {/* Close button (X) */}
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-6 py-4">
          {navLinks.map((item) =>
            item.label === "Team" ? (
              <li key={item.label} className="group">
                <span className="block font-montserrat text-lg px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
                  {item.label}
                </span>
                <ul className="pl-4">
                  {item.subLinks.map((subItem) => (
                    <li key={subItem.label}>
                      <a
                        href={subItem.href}
                        className="block font-montserrat text-lg px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                      >
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block font-montserrat text-lg px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
          <li>
            {/* WhatsApp Button in Dropdown */}
            <div className="w-fit">
              <WhatsAppButton alwaysOn={true} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
