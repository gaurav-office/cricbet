import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ alwaysOn }) => {
  const [onHover, setHover] = useState(alwaysOn || false);
  return (
    <a
      href="https://wa.me/+917737662510"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-green-500 text-white rounded-full font-montserrat font-semibold text-sm overflow-hidden transition-all group hover:bg-green-600 ml-auto"
      onMouseOver={() => {
        setHover(alwaysOn || true);
      }}
      onMouseLeave={() => {
        setHover(alwaysOn || false);
      }}
    >
      {/* WhatsApp Icon */}
      <div className="shrink-0 flex items-center justify-center w-10 h-10 bg-green-600 group-hover:bg-green-700 transition-all duration-300">
        <FaWhatsapp className="text-xl" />
      </div>

      {/* Contact Us Text */}
      <div
        className={`flex items-center  overflow-hidden ${
          !alwaysOn && "opacity-0 group-hover:opacity-100"
        } transition-all duration-500 origin-left  ${
          onHover ? "max-w-24 w-24" : "max-w-0 w-0"
        }`}
        style={{ whiteSpace: "nowrap" }}
      >
        <span className="px-2 py-2">Contact Us</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
