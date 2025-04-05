const HowToPlaceBetPage = () => {
  const steps = [
    {
      title: "Log In to Your Account",
      description:
        "Access your Cricbet99 account by entering your username and password at the website's front page.",
    },
    {
      title: "Deposit Funds",
      description:
        "Check that your betting account contains enough monetary balance. Before placing bets check your account balance or go to deposit the payment methods available.",
    },
    {
      title: "Select a Sport",
      description:
        "Visit Cricbet99's platform to select your preferred betting sport from cricket football or tennis.",
    },
    {
      title: "Choose an Event",
      description:
        "Open the list of matches or events before selecting an appealing choice.",
    },
    {
      title: "Pick a Betting Market",
      description:
        "Choose between match winner bets or top scorer or total run betting types when you want to place your bet.",
    },
    {
      title: "Enter Stake Amount",
      description:
        "Refresh your stake box by entering the funds you want to bet.",
    },
    {
      title: "Confirm Bet",
      description:
        'Before betting you should check your bets one last time then use the "Place Bet" button to finalize your wager.',
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
            src="https://via.placeholder.com/500x600.png?text=How+to+Place+Bet"
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
