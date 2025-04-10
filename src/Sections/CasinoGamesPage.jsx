
import Slots from "../assets/images/Slots.png";
import Poker from "../assets/images/Poker.png";
import Roulette from "../assets/images/Roulette.png";
import Blackjack from "../assets/images/Blackjack.png";
import Baccarat from "../assets/images/Baccarat.png";
import LiveStreamedGaming from "../assets/images/LiveStreamedGaming.png";
const CasinoGamesPage = () => {
  const casinoGames = [
    {
      title: "Slots",
      description:
      "Get ready to embark on an exciting journey through the world of slot games, where each game offers its own unique theme, bonus features, and huge rewards. Whether you prefer the classic three-reel slots or the modern video slots, you'll be thrilled to discover that there’s something for everyone.",
      image: Slots,
    },
    {
      title: "Poker",
      description:
      "Sharpen your poker skills with popular virtual games like Texas Hold'em and Omaha. For the ultimate poker experience, be sure to join live poker tables and participate in poker tournaments, where you can immerse yourself in the true thrill of the game.",
      image: Poker,
    },
    {
      title: "Roulette",
      description:
      "You can try practicing European and American roulette without any financial risk. This allows you to place bets on different number ranges, such as red or black, odd or even numbers, or even specific individual numbers or lucky number series. Spin the wheel and see how your bets play out, offering you a chance to experience the excitement of winning big without the need to wager real money",
      image: Roulette,
    },
    {
      title: "Blackjack",
      description:
"Blackjack is one of the most popular card games, offering a variety of versions for you to enjoy, including Live Blackjack. The main goal of the game is to outsmart and beat the dealer by getting a hand total as close to 21 as possible, especially when counting face cards. This requires strategy and skill to make the right moves and win the game.",
      image: Blackjack,
    },
    {
      title: "Baccarat",
      description:
"Baccarat is one of the most popular casino games, known for its simplicity yet maintaining a high level of excitement. In this game, you place your bet on one of three possible outcomes: the player, the banker, or a tie. Once your stake is placed, the cards are dealt, and the outcome will determine whether luck is on your side, offering a thrilling experience with every round.",
      image: Baccarat,
    },
    {
      title: "Live Streamed Gaming",
      description:
"We invite you to explore our diverse selection of live casino games, where real dealers and croupiers oversee the action. You can enjoy classic games like roulette, blackjack, poker, and baccarat in an immersive environment. Interact with other players and dealers in a dynamic, open-ended setting, all while enjoying the convenience of playing and gambling from the comfort of your own home!",
      image: LiveStreamedGaming,
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
