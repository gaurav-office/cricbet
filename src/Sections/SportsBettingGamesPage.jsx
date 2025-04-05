const SportsBettingGamesPage = () => {
  const games = [
    {
      title: "Cricket",
      description:
        "Cricket, including the IPL, World Cup, Test series for the India cricket team and more – bet live and pre-match. Clients are able to bet on various games and markets: 45, match-winner, total runs, top batsman, top bowler and other interesting offers.",
      image: "https://via.placeholder.com/150?text=Cricket",
    },
    {
      title: "Football",
      description:
        "For football lovers, it is possible to bet on various leagues such as the English Premier League, La Liga, Serie A, UEFA Champions League, and FIFA World Cup. Get to have fun through multiple line markets including; Full Time/Full Time, Total goals, Goal difference, etc.",
      image: "https://via.placeholder.com/150?text=Football",
    },
    {
      title: "Tennis",
      description:
        "For tennis enthusiasts, wager on major tournaments like Wimbledon, the US Open, and other key events. Examine individual or team’s markets such as match winner, set winner, total sets, and others.",
      image: "https://via.placeholder.com/150?text=Tennis",
    },
    {
      title: "Horse Racing",
      description:
        "Try your luck in horse racing betting with available races around the world. Go for a winning horse or try such other markets as place bets, exacta or quinella bets.",
      image: "https://via.placeholder.com/150?text=Horse+Racing",
    },
    {
      title: "Basketball",
      description:
        "Basically, no matter NBA events or other basketball championships, here you will find the widest choice of our betting possibilities along with available markets on numerous matches.",
      image: "https://via.placeholder.com/150?text=Basketball",
    },
  ];

  const otherSports = [
    { title: "Kabaddi", image: "https://via.placeholder.com/150?text=Kabaddi" },
    {
      title: "Badminton",
      image: "https://via.placeholder.com/150?text=Badminton",
    },
    { title: "Boxing", image: "https://via.placeholder.com/150?text=Boxing" },
    {
      title: "E-sports",
      image: "https://via.placeholder.com/150?text=E-sports",
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
