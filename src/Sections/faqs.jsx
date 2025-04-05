import { useState } from "react";

const faqs = [
  {
    question: "How do I sign up for CricBet99?",
    answer:
      "To sign up with CricBet99, just visit their website and click on the “Sign Up” or “Register” button. The next step will be asking you to provide some personal information and create an account.",
  },
  {
    question: "What kinds of sports are available for wagering on CricBet99?",
    answer:
      "You can place bets on cricket, football, tennis, horse racing, basketball, and other popular sports globally.",
  },
  {
    question: "How can I deposit money into my CricBet99 account?",
    answer:
      "You can deposit money via UPI, Paytm, Google Pay, PhonePe, Credit/Debit cards, Skrill, Neteller, and bank transfers.",
  },
  {
    question: "Do they have a minimum age requirement at CricBet99?",
    answer:
      "Yes, you must be at least 18 years old to register and place bets on CricBet99.",
  },
  {
    question: "How are my personal and financial details secure at CricBet99?",
    answer:
      "CricBet99 uses SSL encryption and secure servers to ensure all your information remains protected and private.",
  },
  {
    question: "Can I bet on live matches with CricBet99?",
    answer:
      "Yes, live betting is available for many matches across cricket, football, and other sports.",
  },
  {
    question: "How can I withdraw winnings from my Cricbet 99 account?",
    answer:
      "Winnings can be withdrawn using UPI, Skrill, bank transfer, or e-wallets like Paytm and PhonePe.",
  },
  {
    question: "Does CricBet99 provide bonuses or promotions?",
    answer:
      "Yes, there are welcome bonuses, deposit bonuses, free bets, referral bonuses, and custom betting promotions.",
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

      <footer className="mt-16 px-4 md:px-20 py-10 bg-gradient-to-t from-black via-black to-orange-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-sm max-w-md">
              Welcome to Cricbet99, the go-to website for quality betting in
              cricket and all-round gambling. On Cricbet99, cricket enthusiasts
              can find over 1000 games and a safe, secure, and user-friendly
              platform. Users can enjoy 24*7 customer support.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>&raquo; Home</li>
              <li>&raquo; Login</li>
              <li>&raquo; Registration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white rounded-full p-2">
                <i className="fab fa-facebook text-black"></i>
              </a>
              <a href="#" className="bg-white rounded-full p-2">
                <i className="fab fa-instagram text-black"></i>
              </a>
              <a href="#" className="bg-white rounded-full p-2">
                <i className="fab fa-linkedin text-black"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQPage;
