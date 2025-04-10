import Cricket from "../assets/images/Cricket.png";
import Football from "../assets/images/Football.png";
import Tennis from "../assets/images/Tennis.png";
import HorseRacing from "../assets/images/HorseRacing.png";
import Basketball from "../assets/images/Basketball.png";

import Kabaddi from "../assets/images/Kabaddi.png";
import Badminton from "../assets/images/Badminton.png";
import Boxing from "../assets/images/Boxing.png";
import Esports from "../assets/images/E-sports.png";


const SportsBettingGamesPage = () => {
  const games = [
    {
      title: "Cricket",
      description:
        "For cricket enthusiasts, Cricbet99 offers live and pre-match betting options for popular events like the IPL, World Cup, and Test series involving the India cricket team. You can place bets on various markets such as match winner, total runs, top batsman, top bowler, and much more.",
      image: Cricket,
    },
    {
      title: "Football",
      description:
        "Football fans can bet on major leagues such as the English Premier League, La Liga, Serie A, UEFA Champions League, and the FIFA World Cup. Enjoy various betting options, including Full Time/Full Time, Total Goals, Goal Difference, and other exciting markets.",
      image: Football,
    },
    {
      title: "Tennis",
      description:
        "For tennis lovers, Cricbet99 lets you place bets on top tournaments like Wimbledon, the US Open, and other major events. Bet on markets such as match winner, set winner, total sets, and more.",
      image: Tennis,
    },
    {
      title: "Horse Racing",
      description:
        " Experience the thrill of horse racing betting with races held globally. You can wager on the winning horse or try different markets such as place bets, exacta, or quinella bets.",
      image: HorseRacing,
    },
    {
      title: "Basketball",
      description:
        "Whether it's NBA events or other basketball leagues, Cricbet99 offers a wide variety of betting opportunities, including multiple markets on various matches.",
      image: Basketball,
    },
  ];

  const otherSports = [
    { title: "Kabaddi", image: Kabaddi },
    {
      title: "Badminton",
      image: Badminton,
    },
    { title: "Boxing", image: Boxing },
    {
      title: "E-sports",
      image: Esports,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-500 text-center mb-8">
        Best Sports Betting Games to Play on Cricbet99
      </h1>
      <div className="max-w-6xl mx-auto space-y-8">
        {games.map((game, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gray-900 border-2 border-yellow-500 rounded-xl shadow-xl p-6"
          >
            <img
              src={game.image}
              alt={game.title}
              className={`md:w-1/4 w-full rounded-lg ${
                index % 2 !== 0 ? "order-last md:order-first" : ""
              }`}
            />
            <div className="md:w-3/4 text-center md:text-left md:px-6">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">
                {game.title}
              </h2>
              <p>{game.description}</p>
            </div>
          </div>
        ))}

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            Other Sports
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherSports.map((sport, index) => (
              <div key={index} className="text-center">
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="rounded-lg mb-2 shadow-lg"
                />
                <div className="font-semibold text-yellow-500">
                  {sport.title}
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-yellow-500 text-black font-bold py-2 px-4 rounded">
            Play Sport Games
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportsBettingGamesPage;
