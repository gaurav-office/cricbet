import third from "../assets/images/third.png"

const HowToPlaceBetPage = () => {
  const steps = [
    {
      title: "Log In to Your Account",
      description:
        " Access your Cricbet99 account by entering your username and password on the homepage.",
    },
    {
      title: "Deposit Funds",
      description:
        " Ensure that your account has sufficient balance for betting. You can check your balance or deposit funds through the available payment methods.",
    },
    {
      title: "Choose a Sport",
      description:
        "Browse Cricbet99’s platform to select your preferred sport for betting, whether it's cricket, football, or tennis.",
    },
    {
      title: "Select an Event",
      description:
        " Browse through the list of upcoming matches or events and pick the one that interests you.",
    },
    {
      title: "Pick a Betting Market",
      description:
        " Choose the type of bet you wish to place, such as match winner, top scorer, or total runs, depending on the event.",
    },
    {
      title: "Enter Stake ",
      description:
        "Specify the amount you want to stake by entering it into the stake box.",
    },
    {
      title: "Confirm Your Bet",
      description:
        ' Review your selections carefully and click the "Place Bet" button to confirm and finalize your wager.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-500 text-center mb-8">
        How to Place Bet at Cricbet99
      </h1>
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        <div className="md:w-1/2 sticky top-10 self-start">
          <img
            src={third}
            alt="How to Place Bet at Cricbet99"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-900 rounded-xl shadow-xl p-4">
              <div className="font-bold text-yellow-500 mb-2">
                {index + 1}. {step.title}
              </div>
              <div>{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToPlaceBetPage;
