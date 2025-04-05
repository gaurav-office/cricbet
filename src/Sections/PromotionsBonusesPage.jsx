const PromotionsBonusesPage = () => {
  const bonuses = [
    {
      title: "Welcome Bonus",
      description:
        "100% Match Bonus: When new users create their account the platform matches their first deposit dollar for dollar to boost their starting funds.",
    },
    {
      title: "Deposit Bonuses",
      description:
        "Daily Deposit Bonus: When users make daily deposits they can collect an extra 20% bonus.",
    },
    {
      title: "Free Bets",
      description:
        "Regular Free Bets: Free bet promotions are a regular feature at Cricbet99 allowing customers to build new betting strategies free of charge.",
    },
    {
      title: "Referral Bonus",
      description:
        "5% Referral Bonus: Each time a referred user joins and completes their first bet Cricbet99 awards a 5% bonus that enhances a customer's funds while strengthening customer dedication.",
    },
    {
      title: "Exclusive Promotions",
      description:
        "Custom Betting Markets: Users at Cricbet99 can customize betting markets through the creation of their odds resulting in tailored betting options.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-500 text-center mb-8">
        Cricbet99 Promotion & Bonuses
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {bonuses.map((bonus, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-xl shadow-lg border border-yellow-500"
          >
            <div className="flex items-start gap-4">
              <div className="text-yellow-500 font-bold text-xl border border-yellow-500 rounded px-3 py-1">
                {index + 1}
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">{bonus.title}</h2>
                <p>{bonus.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center mt-6">
          <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded">
            Claim Cricbet99 Bonus
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionsBonusesPage;
