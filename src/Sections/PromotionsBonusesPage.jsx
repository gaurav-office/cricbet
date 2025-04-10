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
        "Daily Deposit Bonus: When users make daily deposits they can collect an extra 20% bonus,giving their funds a boost with every deposit.",
    },
    {
      title: "Free Bets",
      description:
        "Regular Free Bets: Cricbet99 offers regular free bet promotions, allowing customers to try out new betting strategies at no extra cost.",
  },
    {
      title: "Referral Bonus",
      description:
        "5% Referral Bonus: Refer a friend to Cricbet99 and earn a 5% bonus each time they complete their first bet, strengthening your funds and encouraging loyalty.",   },
    {
      title: "Exclusive Promotions",
      description:
        "Custom Betting Markets: Cricbet99 gives users the freedom to customize their betting markets by creating their own odds, offering a more personalized and unique betting experience.",   },
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
