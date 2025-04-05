const CasinoGamesPage = () => {
  const casinoGames = [
    {
      title: "Slots",
      description:
        "Prepare yourself in order to travel with fire through the fantastic world of the slot games where every single slot game boasts different themes, additional games and big prizes. Regardless whether you are into the traditional three-reel slots or the video slots, you will be glad to know that they have it all.",
      image: "https://via.placeholder.com/300?text=Slots",
    },
    {
      title: "Poker",
      description:
        "Brush up your poker in the virtual games of the most common varieties such as Texas Holdem and Omaha. It is important, however, to join the live poker table and the poker tournament to feel the real poker playing experience.",
      image: "https://via.placeholder.com/300?text=Poker",
    },
    {
      title: "Roulette",
      description:
        "Instead, practice European and American variants of the roulette game risking no money at all. This involves bet on number ranges of red or black, odd number or even numbers or individual numbers of your choice or favorite lucky number series and spin the wheel for the bets to win big.",
      image: "https://via.placeholder.com/300?text=Roulette",
    },
    {
      title: "Blackjack",
      description:
        "This is one of the leading card games where you can get all the major types of Blackjack games and amp; enjoy Live Blackjack. The Primary objective of the game is to wit and outplay the dealer by having a hand total, when the face cards are taken into consideration, as close to 21 as possible.",
      image: "https://via.placeholder.com/300?text=Blackjack",
    },
    {
      title: "Baccarat",
      description:
        "As one of the most popular casino games, baccarat is quite easy, but it has not lost its interest. You can place your money on the outcome of the game by putting your stake on the player, the banker, or the tie, and wait as the cards are dealt to determine your luck.",
      image: "https://via.placeholder.com/300?text=Baccarat",
    },
    {
      title: "Live Streamed Gaming",
      description:
        "We offer you to visit our wide variety of live casino games that are played under the supervision of real dealers and croupiers and where you can choose roulette, blackjack, poker, and baccarat. Engage with players and dealers in an open-ended setting and have the ability to play and gamble right from your house!",
      image: "https://via.placeholder.com/300?text=Live+Gaming",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-500 text-center mb-8">
        Best Casino Games to Play on Cricbet99
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {casinoGames.map((game, index) => (
          <div
            key={index}
            className="bg-gray-900 border-2 border-yellow-500 rounded-xl shadow-xl overflow-hidden"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-yellow-500 mb-2">
                {game.title}
              </h2>
              <p>{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasinoGamesPage;
