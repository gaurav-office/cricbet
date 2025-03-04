import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center pt-40 py-12  px-6 md:px-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-montserrat">
        Get In Touch
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center font-sans">
        Get in touch with us for any inquiries or legal assistance.
      </p>

      <div className="pt-14 w-full h-40 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-gray-700" />
            <p className="text-gray-700 text-sm">
              H-15 (Ground Floor), Chitranjan Marg, C-Scheme, Jaipur - 302001,
              Raj.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-gray-700" />
            <a
              href="tel:+917737662510"
              className="text-blue-600 hover:underline text-sm"
            >
              +91-7737662510
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-2xl text-green-500" />
            <a
              href="https://wa.me/917737662510"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-gray-700" />
            <a
              href="mailto:advocate.rachitsharma@shreejeelegal.com"
              className="text-blue-600 hover:underline text-sm"
            >
              contact@shreejeelegal.in
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-full md:h-auto">
          <iframe
            className="w-full h-full rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.221120373844!2d75.8074556753418!3d26.91329475946768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40a8d8e5f4d%3A0xb0eaf623ed5e14e2!2sChitranjan%20Marg%2C%20C-Scheme%2C%20Jaipur%2C%20Rajasthan%20302001!5e0!3m2!1sen!2sin!4v1709381291231!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
