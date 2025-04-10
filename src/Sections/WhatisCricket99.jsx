import second from "../assets/images/second.png"
const WhatIsCricbet99Page = () => {
  return (
    <div className="min-h-screen bg-yellow-500 flex items-center justify-center p-8">
      <div className="bg-yellow-600 rounded-lg shadow-xl flex flex-col md:flex-row items-center p-8 max-w-6xl">
        <div className="md:w-1/2 md:pr-6">
          <h1 className="text-3xl font-bold text-center md:text-left text-black mb-6">
            What is Cricbet99?
          </h1>
          <p className="text-black text-justify mb-6">
          Cricbet99 is a premier sports betting platform that offers a wide range of betting options, focusing on cricket while also covering football, tennis, and other major events. This user-friendly platform delivers competitive odds, quick money withdrawals, and round-the-clock live customer support.
Cricbet99 not only offers traditional sports betting but also provides opportunities for election betting and casino games, giving users a variety of options to explore. The platform is designed to deliver a seamless betting experience with valuable rewards and secure financial transactions. For further information, users can visit the official website or reach out to their dedicated support teams.
          </p>
          <button className="bg-black text-white font-bold py-2 px-4 rounded">
            Get Cricbet99 ID
          </button>
        </div>
        <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
          <img
            src={second}
            alt="What is Cricbet99"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsCricbet99Page;
