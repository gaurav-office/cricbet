import { useState } from "react";

const faqs = [
  {
    question: "How can I create an account with CricBet99?",
    answer:
      "To sign up for CricBet99, simply visit the website or download the mobile app. Click on the 'Sign Up' button, enter your personal details, and create a secure password. After registration, verify your account using the required documents, and you're ready to start betting!.",
  },
  {
    question: "What sports can I place bets on through CricBet99?",
    answer:
      "CricBet99 offers a wide range of sports, with a primary focus on cricket. In addition to cricket, you can also bet on popular sports such as football, tennis, basketball, horse racing, and many other international and regional sports.",
  },
  {
    question: "What are the available methods for depositing money into my CricBet99 account?",
    answer:
      "CricBet99 provides various secure payment methods for depositing funds, including credit/debit cards, bank transfers, and e-wallets. Simply log in to your account, navigate to the deposit section, select your preferred payment method, and follow the prompts to add funds to your account.",
  },
  {
    question: "Is there a minimum age requirement to use CricBet99?",
    answer:
      "Yes, CricBet99 follows legal regulations and requires users to be at least 18 years old to register and place bets. Make sure to provide valid identification during registration for verification purposes.",
  },
  {
    question: "How does CricBet99 protect my personal and financial information?",
    answer:
      "CricBet99 employs advanced encryption technology to ensure the security of your personal and financial data. Your details are stored in a secure environment, and the platform uses trusted payment systems to protect all transactions, giving you peace of mind while betting.",
  },
  {
    question: "Can I place bets on live events with CricBet99?",
    answer:
      "Yes, CricBet99 offers live betting on a variety of sports. You can place wagers during ongoing matches and take advantage of real-time odds to enhance your betting experience.",
  },
  {
    question: "How do I withdraw my winnings from CricBet99?",
    answer:
      "Withdrawing your winnings from CricBet99 is easy. Simply go to your account, choose the 'Withdraw' option, and select your preferred payment method. Enter the amount you'd like to withdraw and confirm the transaction. Withdrawals are processed quickly to ensure you get your winnings without delay.",
  },
  {
    question: "Are there any bonuses or promotions available on CricBet99?",
    answer:
      "Yes, CricBet99 regularly offers a variety of bonuses and promotions to both new and existing users. These include welcome bonuses, deposit match offers, free bets, and special promotions for live betting. Be sure to check the promotions section on the website or app for the latest offers.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-orange-400 px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-yellow-500">
        Frequently Asked Questions About CricBet99
      </h2>
      <div className="max-w-4xl mx-auto border border-white divide-y divide-white">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-4 py-3 font-medium focus:outline-none hover:bg-orange-900 transition-all"
            >
              <span className="mr-2">{openIndex === index ? "-" : "+"}</span>{" "}
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="bg-black px-6 py-4 text-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
