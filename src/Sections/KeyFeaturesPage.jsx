const KeyFeaturesPage = () => {
  const features = [
    {
      title: "Wide Range of Sports and Betting Markets",
      description:
        "The betting platform at Cricbet99 serves users who enjoy diverse sports. The platform gained fame primarily for cricket wagering yet extends its betting choices to football tennis basketball horse racing and various other sports. The betting platform at Cricbet99 presents numerous bet types split into pre-match and in-play betting markets so users always find available options.",
      icon: "📊",
    },
    {
      title: "Live Betting and Real-Time Odds",
      description:
        "Cricbet99 lets its users participate in live betting through features that show up-to-date odds during matches. Users may place their wagers at any time during the game whether they choose cricket or football matches. The live betting system offers players an exhilarating rapid betting experience that runs along with active matches.",
      icon: "⏱️",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Users experience effortless site navigation because Cricbet99 presents its platform with an easily understandable layout. Players of all skill levels can effortlessly locate their desired sports as well as view current odds and make bets through the website. The betting system on both the website and mobile application has received user-friendly optimization to deliver an optimal betting process for users.",
      icon: "🧭",
    },
    {
      title: "Mobile Compatibility",
      description:
        "The growing number of smartphone users leads Cricbet99 to develop an interface which works on mobile devices. Users can enjoy a responsive interface between the Cricbet99 mobile app and website which supports complete platform capability. Any bettor can access the betting platform through a mobile application while watching live streams (sometimes) and verifying account details from every location.",
      icon: "📱",
    },
    {
      title: "Secure Payment Methods",
      description:
        "Users can utilize diverse secured payment methods to complete their transactions regarding account funding and withdrawals on Cricbet99. All users can select payment methods that include credit/debit cards together with bank transfers and e-wallets. Bettors experience comfort when using Cricbet99 because the platform executes all transactions securely through safe payment systems.",
      icon: "💳",
    },
    {
      title: "Fast Withdrawals",
      description:
        "Users like Cricbet99 because its withdrawal service provides fast processing of funds to customers. Users of Cricbet99 can receive their winnings without delay because the platform delivers quick withdrawal services for all its members.",
      icon: "💸",
    },
    {
      title: "Attractive Bonuses and Promotions",
      description:
        "Cricbet99 delivers different bonus packages to users who join as well as those who already have accounts. The promotions at Cricbet99 consist of welcome bonuses and free bets and deposit matches which enhance the betting value for users. Users should monitor the site actively because it contains current promotional deals.",
      icon: "🎁",
    },
    {
      title: "Customer Support",
      description:
        "Users can receive superior customer service from Cricbet99 by connecting through live chat and email as well as phone channels. Users can contact the support team at any time through various channels because they have 24/7 availability to help users with their queries and problems. All users requiring assistance with betting administration along with anyone who needs to query their account can reach Cricbet99's dependable and responsive customer support unit.",
      icon: "📞",
    },
    {
      title: "User Account Management",
      description:
        "Users can easily operate their accounts on Cricbet99 through methods such as funds deposit and withdrawal along with betting history tracking. Through Cricbet99 users acquire an understandable summary view about account information combined with betting details and transaction histories to benefit from complete control of their betting activities.",
      icon: "🧾",
    },
    {
      title: "Responsible Gambling",
      description:
        "Cricbet99 takes responsibility by promoting responsible gambling practices dedicated to it. Users can find various tools and resources through the platform to handle their betting behavior by monitoring their deposits and opting out from gambling activities and obtaining addiction help support. A secure betting space for users requires this service to be implemented.",
      icon: "⚖️",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold text-yellow-500 text-center mb-8">
        Key Features of Cricbet99
      </h1>
      <div className="max-w-5xl mx-auto space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-700 flex gap-4 items-start"
          >
            <div className="text-4xl">{feature.icon}</div>
            <div>
              <h2 className="font-bold text-lg mb-2">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
        <div className="text-center mt-8">
          <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded">
            Get Cricbet99 ID
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesPage;
