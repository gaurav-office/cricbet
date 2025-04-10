import AttractiveBonusesandPromotions from "../assets/images/AttractiveBonusesandPromotions.png";
import CustomerSupport from "../assets/images/CustomerSupport.png";
import FastWithdrawals from "../assets/images/FastWithdrawals.png";
import LiveBetting from "../assets/images/LiveBetting.png";
import MobileCompatibility from "../assets/images/MobileCompatibility.png";
import ResponsibleBetting from "../assets/images/ResponsibleBetting.png";
import SecurePayment from "../assets/images/SecurePayment.png";
import UserAccountManagement from "../assets/images/UserAccountManagement.png";
import UserFriendlyInterface from "../assets/images/UserFriendlyInterface.png";
import WideRangeofSportsandBetting from "../assets/images/WideRangeofSportsandBetting.png";

const KeyFeaturesPage = () => {
  const features = [
    {
      title: "Cricbet99 Offers Wide Range of Sports and Betting Markets",
      description:
        "Cricbet99 caters to sports enthusiasts with a broad variety of sports for betting...",
      image: WideRangeofSportsandBetting,
    },
    {
      title: "Live Betting and Real-Time Odds",
      description:
        "Cricbet99 enhances the betting experience with live betting, offering real-time odds...",
      image: LiveBetting,
    },
    {
      title: "User-Friendly Interface",
      description:
        "The Cricbet99 platform is designed with simplicity in mind...",
      image: UserFriendlyInterface,
    },
    {
      title: "Mobile Compatibility",
      description:
        "Cricbet99 ensures a smooth and responsive experience on mobile devices...",
      image: MobileCompatibility,
    },
    {
      title: "Secure Payment Methods",
      description:
        "Cricbet99 supports a wide array of secure payment options...",
      image: SecurePayment,
    },
    {
      title: "Fast Withdrawals",
      description:
        "One of Cricbet99's standout features is its fast withdrawal service...",
      image: FastWithdrawals,
    },
    {
      title: "Attractive Bonuses and Promotions",
      description:
        "Cricbet99 offers a range of exciting bonus packages...",
      image: AttractiveBonusesandPromotions,
    },
    {
      title: "Customer Support",
      description:
        "Cricbet99 provides round-the-clock customer support...",
      image: CustomerSupport,
    },
    {
      title: "User Account Management",
      description:
        "Managing an account on Cricbet99 is easy and intuitive...",
      image: UserAccountManagement,
    },
    {
      title: "Responsible Gambling",
      description:
        "Cricbet99 promotes responsible gambling by offering various tools...",
      image: ResponsibleBetting,
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
            className="bg-gray-900 p-6 pl-24 rounded-xl shadow-xl border border-gray-700 flex gap-20  items-start"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-20 h-20 object-contain rounded-lg"
            />
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
