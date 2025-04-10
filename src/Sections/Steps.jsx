const Cricbet99StepsPage = () => {
  const registrationSteps = [
    {
      title: "Visit the Official Website",
      description: "Head over to the official Cricbet99 website to get started.",
    },
    {
      title: "Find the Sign-Up Button",
      description:
        ' Look for the "Sign-Up" or "Register" button, usually located at the top-right corner of the website',
    },
    {
      title: "Fill in Personal Details",
      description:
        "Provide accurate personal information, including your chosen username, gender, mobile number, and email address.",
    },
    {
      title: "Create Your Login Credentials",
      description:
        "Set a strong password for secure access to your Cricbet99 account..",
    },
    {
      title: "Enter Promo Code (If Available)",
      description:
        "If you have a promotional code, enter it in the designated box during registration.",
    },
    {
      title: "Agree to Terms and Conditions",
      description:
        " Review and accept the terms and conditions to finalize your account creation.",
    },
    {
      title: "Verify Your Account",
      description:
        " Complete the verification process by entering the OTP sent to your registered mobile number or email address.",
    },
  ];

  const loginSteps = [
    {
      title: "Access the Platform",
      description:
        " Visit Cricbet99 through cricbet99.com or open the Cricbet99 app on your device to get started.",
    },
    {
      title: "Go to the Login Page",
      description:
        ' Click on the "Login" link, usually located at the top-right corner of the homepage..',
    },
    {
      title: "Enter Your Credentials",
      description:
        " Provide your registered username and password in the appropriate fields.",
    },
    {
      title: "Complete the Login",
      description:
        ' After entering your credentials, click the "Login" button to access your account',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Registration Steps */}
        <div>
          <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">
            Cricbet99 Registration: Easy Steps to Create Your Account
          </h2>
          {registrationSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 mb-4 rounded-xl shadow-lg"
            >
              <div className="font-bold text-yellow-500 mb-2">
                {index + 1}. {step.title}
              </div>
              <div>{step.description}</div>
            </div>
          ))}
          <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded block mx-auto mt-4">
            Cricbet99 Signup
          </button>
        </div>

        {/* Login Steps */}
        <div>
          <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">
            Cricbet99 Login: Easy Steps to Access Your Account
          </h2>
          {loginSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 mb-4 rounded-xl shadow-lg"
            >
              <div className="font-bold text-yellow-500 mb-2">
                {index + 1}. {step.title}
              </div>
              <div>{step.description}</div>
            </div>
          ))}
          <p className="mt-4 text-sm">
          If you’ve forgotten your password, simply click the "Forgot Password" link to begin the reset process. Cricbet99’s customer service is available 24/7 for support via email, phone, and WhatsApp.
          </p>
          <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded block mx-auto mt-4">
            Cricbet99 Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cricbet99StepsPage;
