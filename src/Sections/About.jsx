const Cricbet99AboutPage = () => {
  const aboutDetails = [
    { feature: "Company", details: "Cricbet99" },
    { feature: "License", details: "Curacao" },
    {
      feature: "Payment Methods",
      details: "Debit/Credit Card, UPI, e-Wallet, Net Banking",
    },
    { feature: "Banking Services", details: "24×7" },
    {
      feature: "Sports & Casino Games",
      details:
        "Cricket, Tennis, Football, Blackjack, Teen-Patti, Roulette, Bingo, etc.",
    },
    { feature: "Crash Games", details: "Aviator & Jetx" },
    {
      feature: "Support",
      details: "24×7 on WhatsApp Chat, Email, and Phone Number",
    },
    {
      feature: "Multilingual Support",
      details: "Hindi, English, Bengali & Marathi",
    },
    { feature: "Primary Currency", details: "Indian Rupees (INR)" },
    { feature: "Demo Account", details: "Available" },
    { feature: "Betting ID Charges", details: "Free" },
    {
      feature: "Minimum Deposit & Withdrawal",
      details: "Rs. 500 & Rs. 1000 Respectively",
    },
    { feature: "Maximum One-Time Deposit & Withdrawal", details: "Rs. 49,500" },
    {
      feature: "Bonuses & Promotions",
      details: "100% Welcome, 10% Deposit & 5% Referral",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8">
        About Cricbet99
      </h1>
      <table className="w-full max-w-4xl text-left">
        <thead className="bg-yellow-500 text-black">
          <tr>
            <th className="py-3 px-4">FEATURE</th>
            <th className="py-3 px-4">DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {aboutDetails.map((item, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-3 px-4 font-semibold">{item.feature}</td>
              <td className="py-3 px-4">{item.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cricbet99AboutPage;
