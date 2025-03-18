import PropTypes from "prop-types";

const Disclaimer = ({ onAccept }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent backdrop-blur-md z-[60] px-4">
      <div className="w-full max-w-4xl bg-white/80 shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
        <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-center sm:text-left">
          Disclaimer
        </h1>
        <p className="font-montserrat text-base sm:text-lg px-2 sm:px-4 md:px-10 text-justify">
          The Bar Council of India forbids advocates from advertising or
          soliciting in any shape or manner. By using this website
          <strong> (shreejeelegal.in)</strong>, you recognise and affirm that
          you are seeking information about SHREE JEE LEGAL on your own
          initiative and that <strong>SHREE JEE LEGAL</strong> or its members
          have made no solicitation, advertising, or enticement. This
          website&apos;s content is provided for educational purposes only and
          should not be construed as solicitation or advertisement. If a visitor
          wishes to obtain or use our legal services online or offline, it is
          performed on his or her own free will and agreement, and should not be
          regarded as solicitation, enticement, or advertisement in any way.{" "}
          <strong>SHREE JEE LEGAL</strong> is not responsible for any actions
          made as a result of relying on the material/information on this
          website.
        </p>

        <div className="flex justify-center sm:justify-start">
          <button
            onClick={onAccept}
            className="border-2 border-gray-400 px-4 py-2 mt-6 text-sm sm:text-base hover:bg-gray-100 transition"
          >
            Accept It
          </button>
        </div>
      </div>
    </div>
  );
};

Disclaimer.propTypes = {
  onAccept: PropTypes.func.isRequired,
};

export default Disclaimer;
