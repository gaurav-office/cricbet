const Cricbet99Page = () => {
  const tableOfContents = [
    "Welcome to Cricbet99: Best Betting Site in India",
    "What is Cricbet99?",
    "Cricbet99 Registration: Easy Steps to Create Your Account",
    "Cricbet99 Login: Easy Steps to Access Your Account",
    "How to Place Bet at Cricbet99",
    "Best Sports Betting Games to Play on Cricbet99",
    "Other Sports",
    "Best Casino Games to Play on Cricbet99",
    "Other casino Games",
    "Cricbet99: Step-by-Step Deposit & Withdrawal Process",
    "Cricbet99 Promotion & Bonuses",
    "Cricbet99 Customer Care",
    "Cricbet99 App",
    "Recent Post",
    "Review",
    "Frequently Asked Questions About CricBet99",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold text-yellow-500 mb-6">
        Welcome to Cricbet99: Best Betting Site in India
      </h1>
      <p className="text-center max-w-4xl mb-6">
        Its time for you to use your knowledge of cricket and win more!
        Presenting Indias best online cricket betting platform{" "}
        <span className="font-bold">Cricbet99</span> in where you can place bets
        on pre-match and live matches to get extraordinary wins.
      </p>
      <p className="text-center max-w-4xl mb-6">
        Our lakhs of customer trust on us for the better cricket betting
        experience in India. They know that they are safe, secure and operate on
        a trusted platform. We value your privacy and thus have safeguard
        measures to make sure that everything that you do here is completely
        hassle-free. We also offer huge promotional, referral, and sign-up
        bonuses to our extremely loyal customers.
      </p>
      <p className="text-center max-w-4xl mb-6">
        Want to check if you are eligible for a bonus? Signup with{" "}
        <span className="text-yellow-500 font-semibold">Cricbet99</span> today
        and get your cricket ID to start. Here are the details:
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg mb-8">
        Get Cricbet99 ID
      </button>

      <div className="w-full max-w-4xl border border-yellow-500 rounded-lg p-4 mb-8">
        <h2 className="text-xl font-bold border-b border-yellow-500 pb-2 mb-4">
          Table Of Content
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {tableOfContents.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.replace(/\s+/g, "-")}`}
                className="hover:text-yellow-500 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {tableOfContents.map((item, index) => (
        <section
          key={index}
          id={item.replace(/\s+/g, "-")}
          className="w-full max-w-4xl mb-10 p-4 border border-gray-700 rounded"
        >
          <h3 className="text-2xl font-bold mb-4 text-yellow-500">{item}</h3>
          <p className="text-sm text-gray-400">
            [Detailed content for {item} goes here.]
          </p>
        </section>
      ))}
    </div>
  );
};

export default Cricbet99Page;
