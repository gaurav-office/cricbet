const Disclaimer = ({ onAccept }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent backdrop-blur-md z-[60]">
      <div className="w-2/3 bg-white/80 shadow-lg rounded-lg p-10 ">
        <h1 className="font-montserrat font-bold text-5xl mb-4 ">Disclaimer</h1>
        <p className=" font-montserrat text-lg px-10 justify-content text-justify ">
          The Bar Council of India forbids advocates from advertising or
          soliciting in any shape or manner. By using this website
          <strong> (shreejeelegal.in)</strong> , you recognise and affirm that
          you are seeking information about SHREE JEE LEGAL on your own
          initiative and that
          <strong> SHREE JEE LEGAL</strong> or its members have made no
          solicitation, advertising, or enticement. This website's content is
          provided for educational purposes only and should not be construed as
          solicitation or advertisement. If a visitor wishes to obtain or use
          our legal services online or offline, it is performed on his or her
          own free will and agreement, and should not be regarded as
          solicitation, enticement, or advertisement in any way.{" "}
          <strong> SHREE JEE LEGAL</strong> is not responsible for any actions
          made as a result of relying on the material/information on this
          website.
        </p>

        <button
          onClick={onAccept}
          className="border-4 border-gray-400 px-1 py-1 mt-4 mb-4"
        >
          Accept It
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
