const Cricbet99StepsPage = () => {
  const registrationSteps = [
    {
      title: "Visit the Official Website",
      description: "Navigate to the official Cricbet99 website.",
    },
    {
      title: "Locate the Sign-Up Button",
      description:
        'Users can find and press the "Sign-Up" or "Register" button that frequently resides at the website\'s top-right section.',
    },
    {
      title: "Fill in Personal Information",
      description:
        "Users must enter their exact details with username and gender information together with their mobile number and email address.",
    },
    {
      title: "Create Login Credentials",
      description:
        "Create a solid password when setting up your account access.",
    },
    {
      title: "Enter Promo Code (If Available)",
      description:
        "Step into the Sign-Up promotional code box when it appears on the designated space.",
    },
    {
      title: "Accept Terms and Conditions",
      description:
        "For completion of account sign-up agree to the terms and conditions defined by Cricbet99.",
    },
    {
      title: "Verify Your Account",
      description:
        "You need to verify your account by providing the OTP that got sent to your registered mobile number or email address.",
    },
  ];

  const loginSteps = [
    {
      title: "Access the Platform",
      description:
        "Users can reach Cricbet99 through cricbet99.com or by launching the Cricbet99 app from their device.",
    },
    {
      title: "Navigate to the Login Page",
      description:
        'Click the "Login" link anchored at the top-right section of the homepage.',
    },
    {
      title: "Enter Your Credentials",
      description:
        "Input your registered username and password in the respective fields.",
    },
    {
      title: "Complete the Process",
      description:
        'After entering your credentials click the "Login" button to enter your account area.',
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
            See the “Forgot Password” link on the login page to initiate your
            password reset process. Seek help through Cricbet99’s continuous
            customer service available immediately 24 hours daily for email and
            phone support alongside WhatsApp access.
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
