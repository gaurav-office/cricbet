/* eslint-disable react/prop-types */
// import { useNavigate } from "react-router-dom";
import { office, Office4 } from "../assets";

const Hero = ({ openModal }) => {
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-0"
    >
      {/* Left Section */}
      <div className="relative xl:w-3/5 min-h-[100vh]  flex flex-col justify-center items-start w-full sm:pt-40 pt-32 px-7 xl:px-16 bg-[#e2e2e2] text-gray-800">
        <h1 className=" text-3xl font-montserrat leading-tight font-bold">
          <span className="md:text-5xl sm:text-3xl bg-[#a6a6a6]  xl:whitespace-nowrap inline-block py-3 px-2 sm:py-4 sm:px-3 text-[#404040] font-normal">
            Empowering Justice
          </span>
          <br />
          <span className=" relative text-5xl sm:text-7xl text-gray-700 my-1 block xl:whitespace-nowrap xl:bg-[#e2e2e2] z-[50] pr-3 py-3">
            <span className="text-blue-500 font-palanquin">Your Justice,</span>{" "}
            Our Commitment
          </span>
        </h1>
        <p className="font-montserrat text-justify text-base sm:text-lg text-gray-600 leading-6 sm:leading-7 my-3 mb-4 max-w-[90%] sm:max-w-[70%]">
          At <span className="text-gray-900 font-bold">Shree Jee Legal</span>,
          we focus on building trust and delivering value by understanding our
          client&apos;s needs and challenges, anticipating risks, and providing
          innovative solutions. We help analyze options through cost-benefit
          analysis and deliver practical, cost-effective, and legally sound
          advice, grounded in law and judicial precedents. Our approach ensures
          reliable, impactful guidance, empowering clients to make informed
          decisions with confidence.
        </p>
        <button
          onClick={openModal}
          className="bg-[#636363] font-montserrat text-[#fffdfd] font-bold py-2 px-4 rounded hover:bg-[#404040] transition duration-300"
        >
          Book a Consultation
        </button>
      </div>

      {/* Right Section */}
      <div className="relative hidden xl:block w-full xl:flex-1 bg-slate-100 xl:min-h-screen bg-cover bg-center z-[45]">
        <div
          className="w-full h-full absolute inset-0 opacity-50 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${Office4})` }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
