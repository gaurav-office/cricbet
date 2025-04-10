const Cricbet99Page = () => {
  const tableOfContents = [
    "Introduction to Cricbet99: India’s Leading Betting Platform",
    "What is Cricbet99?",
    "How to Register on Cricbet99: Simple Steps to Create Your Account",
    "Logging into Cricbet99: Quick Guide to Access Your Account",
    "Placing Bets on Cricbet99: A Step-by-Step Guide",
    "Top Sports Betting Games Available on Cricbet99",
    "Explore Other Sports on Cricbet99",
    "Best Casino Games You Can Play on Cricbet99",
    "Discover More Casino Games on Cricbet99",
    "How to Deposit and Withdraw on Cricbet99: A Complete Guide",
    "Exclusive Promotions & Bonuses on Cricbet99",
    "Cricbet99 Customer Support: How We Assist You",
    "Cricbet99 Mobile App: Bet Anytime, Anywhere",
    "Recent Articles and Updates",
    "User Reviews of Cricbet99",
    "Frequently Asked Questions about Cricbet99",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold text-yellow-500 mb-6">
      Welcome to Cricbet99: The Leading Betting Platform in India
      </h1>
      <p className="text-center max-w-4xl mb-6">
      Are you ready to put your cricket expertise to the test and earn big? Look no further! Cricbet99 is India's premier online cricket betting platform, where you can place your bets on both pre-match and live games for amazing rewards
      </p>
      <p className="text-center max-w-4xl mb-6">
      Thousands of customers trust Cricbet99 for an unmatched cricket betting experience. They choose us because they know that they are on a secure, reliable platform. Your privacy is our priority, and we have implemented strong security measures to ensure that your experience is completely hassle-free. Additionally, we offer incredible bonuses through promotions, referrals, and sign-ups to show appreciation for our loyal customers.
      </p>
      <p className="text-center text-xl max-w-4xl mb-6">
      Curious About Your Bonus Eligibility?
      <br></br>
        <span className="text-yellow-500 font-semibold">Cricbet99</span> Sign up with Cricbet99 today and create your cricket ID to get started! Check if you're eligible for exclusive bonuses and start your journey with us. Here are the details:
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

      {/* {tableOfContents.map((item, index) => (
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
      ))} */}
    </div>
  );
};

export default Cricbet99Page;
