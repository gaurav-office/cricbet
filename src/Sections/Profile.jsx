const Profile = ({ data }) => {
  console.log({ data });
  const {
    profilePicture,
    name,
    title,
    qualifications,
    expertise,
    experience,
    // custom,
  } = data;
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-200 pt-[18vh]">
      {/* Left Section for Profile Picture */}
      <div className="w-full lg:w-1/3 bg-gray-200 flex items-center justify-center py-10 lg:py-0">
        <div className="text-center">
          <img
            src={profilePicture}
            alt={name}
            className="  sm:h-80 sm:w-60 shadow-xl border-4 border-[#1d1d1d] mx-auto object-cover"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-950 mt-6 font-montserrat">
            {name}
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 font-montserrat">
            {title}
          </h2>
          {/* {custom && (
            <h2 className="text-lg sm:text-xl font-semibold text-gray-200 font-montserrat">
              {custom}
            </h2>
          )} */}
        </div>
      </div>

      {/* Right Section for Profile Details */}
      {/* Right Section for Profile Details */}
      <div className="w-full lg:w-2/3 p-6 sm:p-10">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2C3E50] font-palanquin">
            Professional Qualifications
          </h1>
          <p className="text-[#4A4A4A] mt-2 text-sm sm:text-base font-montserrat overflow-y-auto max-h-[40vh] pr-2">
            {qualifications}
          </p>

          <div className="mt-8 space-y-6">
            {/* Section: Professional Qualifications */}
            <div className="border-l-4 border-[#2d2f2f] pl-4">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2C3E50] font-montserrat">
                Summary
              </h3>
              <p className="text-[#4A4A4A] text-sm sm:text-base font-montserrat overflow-y-auto max-h-[40vh] pr-2">
                {expertise.qualifications}
              </p>
            </div>

            {/* Section: Key Areas of Expertise */}
            <div className="border-l-4 border-[#2d2f2f] pl-4">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2C3E50] font-montserrat">
                Key Areas of Expertise
              </h3>
              <ul className="list-disc list-inside text-[#4A4A4A] text-sm sm:text-base space-y-2 font-montserrat overflow-y-auto max-h-[40vh] pr-2">
                {expertise.keyAreas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>

            {/* Section: Years of Experience */}
            <div className="border-l-4 border-[#2d2f2f] pl-4">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2C3E50] font-montserrat">
                Years of Experience
              </h3>
              <p className="text-[#4A4A4A] text-sm sm:text-base font-montserrat overflow-y-auto max-h-[40vh] pr-2">
                {experience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
