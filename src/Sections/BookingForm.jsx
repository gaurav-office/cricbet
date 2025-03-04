import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    additionalDetails: "",
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <section
      id="booking-form"
      className="w-full py-20 px-8 sm:px-16 bg-gradient-to-b from-white to-[#f0f8ff] font-montserrat"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#002D62]">
          Book a <span className="text-[#008CBA]">Consultation</span>
        </h2>
        <div className="bg-white shadow-xl rounded-lg p-10">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="text-sm font-semibold text-[#002D62] mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border border-[#cccccc] rounded-md px-6 py-3 text-gray-800"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="text-sm font-semibold text-[#002D62] mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border border-[#cccccc] rounded-md px-6 py-3 text-gray-800"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-[#002D62] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-[#cccccc] rounded-md px-6 py-3 text-gray-800"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="contactNumber"
                className="text-sm font-semibold text-[#002D62] mb-2"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                className="border border-[#cccccc] rounded-md px-6 py-3 text-gray-800"
                placeholder="Enter your contact number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="documents"
                className="text-sm font-semibold text-[#002D62] mb-2"
              >
                Document Submission
              </label>
              <input
                type="file"
                id="documents"
                name="documents"
                className="border border-[#cccccc] rounded-md px-6 py-3 text-gray-800"
                onChange={handleFileChange}
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="additionalDetails"
                className="text-sm font-semibold text-[#002D62] mb-2"
              >
                Additional Details
              </label>
              <textarea
                id="additionalDetails"
                name="additionalDetails"
                rows="4"
                className="border border-[#cccccc] rounded-md px-6 py-3 text-gray-800"
                placeholder="Enter any additional details here..."
                value={formData.additionalDetails}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-[#008CBA] text-white rounded-full hover:bg-[#005f6a]"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
