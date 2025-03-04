import { Hanumant, RachitSharma } from "../assets";
import { Shashank } from "../assets";
import { Link } from "react-router-dom"; // Import Link

const Team = () => {
  return (
    <section
      id="our-team"
      className="w-full py-20 px-8 sm:px-16 bg-gradient-to-b from-[#eeeeee] to-[#d6d6d6] text-[#1d1d1d]"
    >
      <div className="max-w-5xl mx-auto pt-14">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 font-montserrat text-[#636363]">
          Meet Our <span className="text-[#111111]">Team</span>
        </h2>

        {/* Team Member Cards */}
        <div className="space-y-12">
          {/* Team Member 1 */}
          <Link
            to="/profile/Mr_Rachit_Sharma"
            className="flex flex-col sm:flex-row items-center bg-gray-100 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex-shrink-0 sm:mr-4 w-40 h-60 sm:w-64 sm:h-64 rounded-lg overflow-hidden border-4 border-[#0066cc]">
              <img
                src={RachitSharma}
                alt="Rachit Sharma"
                className="w-full h-full sm:h-72 object-cover"
              />
            </div>
            <div className="w-full sm:w-2/3 text-center sm:text-left mt-4 sm:mt-0">
              <h3 className="text-3xl font-semibold mb-2 font-montserrat">
                Rachit Sharma
              </h3>
              <p className="text-gray-700 text-sm sm:text-base font-montserrat">
                Advocate & Legal Advisor
              </p>
              <p className="hidden sm:block text-gray-600 text-sm mt-4 font-montserrat">
                Handles company law matters, commercial cases, and due diligence
                for companies offering IPOs and FPOs. Expertise in corporate
                restructuring and litigation.
              </p>
            </div>
          </Link>

          {/* Team Member 2 */}
          <Link
            to="/profile/Mr_Shashank_Pancholi"
            className="flex flex-col sm:flex-row-reverse items-center bg-gray-100 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex-shrink-0  w-40 h-60 sm:w-64  rounded-lg overflow-hidden border-4 border-[#0066cc]">
              <img
                src={Shashank}
                alt="Shashank Sharma"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full sm:w-2/3 text-center sm:text-left mt-4 sm:mt-0">
              <h3 className="text-3xl font-semibold mb-2 font-montserrat">
                Shashank Pancholi
              </h3>
              <p className="text-gray-700 text-sm sm:text-base font-montserrat">
                Advocate & Legal Consultant
              </p>
              <p className="hidden sm:block text-gray-600 text-sm mt-4 font-montserrat">
                Handles a wide range of criminal cases, specializing in
                innovative defense strategies. His expertise extends to
                white-collar crimes and other complex criminal matters.
              </p>
            </div>
          </Link>

          {/* Team Member 3 */}
          <Link
            to="/profile/Mr_Hanumant_Singh_Shekhawat"
            className="flex flex-col sm:flex-row items-center bg-gray-100 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex-shrink-0 w-40 h-60 sm:w-64 sm:h-64 rounded-lg overflow-hidden sm:mr-4 border-4 border-[#0066cc]">
              <img
                src={Hanumant}
                alt="Hanumant Sharma"
                className="w-64  object-cover"
              />
            </div>
            <div className="w-full sm:w-2/3 text-center sm:text-left mt-4 sm:mt-0">
              <h3 className="text-3xl font-semibold mb-2 font-montserrat">
                Hanumant Singh Shekhawat
              </h3>
              <p className="text-gray-700 text-sm sm:text-base font-montserrat">
                Advocate
              </p>
              <p className="hidden sm:block text-gray-600 text-sm mt-4 font-montserrat">
                Handles service law related matters, Commercial Cases, Debt
                Recovery cases, RERA, Consumer Cases etc..
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
