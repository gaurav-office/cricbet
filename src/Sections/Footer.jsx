const Footer = () => {
  return (
    <footer className="bg-[#404040] text-white py-10 font-montserrat">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-300">SHREE JEE LEGAL</h2>
        <p className="text-lg mt-2 text-gray-300">
          Advocate & Legal Consultants
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <i className="fas fa-map-marker-alt text-2xl text-[#9c9c9c] mb-2"></i>
            <p className="text-sm text-gray-300">
              H-15 (Ground Floor), Chitranjan Marg,
              <br />
              C-Scheme, Jaipur - 302001, Raj.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-phone text-2xl text-[#9c9c9c] mb-2"></i>
            <p className="text-sm text-gray-300">
              <a
                href="tel:+917737662510"
                className="text-gray-300 hover:underline"
              >
                +91-7737662510
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-envelope text-2xl text-[#9c9c9c] mb-2"></i>
            <p className="text-sm text-gray-300">
              <a
                href="mailto:advocate.rachitsharma@shreejeelegal.com"
                className="text-gray-300 hover:underline"
              >
                contact@shreejeelegal.in
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-map text-2xl text-[#9c9c9c] mb-2"></i>
            <p className="text-sm text-gray-300">
              <a
                href="https://maps.app.goo.gl/EzcU6heXefEdksTD9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                View Location
              </a>
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-300 mt-10">
          © 2025 SHREE JEE LEGAL™. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
