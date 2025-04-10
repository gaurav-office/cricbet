const RecentPostReviews = () => {
  return (
    <div className="bg-black text-white py-10 px-4">
      {/* Recent Posts */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-yellow-400 text-center text-3xl font-bold mb-10">
          Recent Post
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              img: "/mi-vs-rcb.png",
              title:
                "MI vs RCB: Who’s the Safer Bet? CricBet99 Compares Recent Performances!",
              author: "Richard Konik",
              date: "April 2, 2025",
            },
            {
              img: "/srh-vs-gt.png",
              title:
                "SRH vs GT: CricBet99’s Smart Betting Insights After a Stunning Match!",
              author: "Richard Konik",
              date: "April 2, 2025",
            },
            {
              img: "/kkr-vs-lsg.png",
              title:
                "KKR vs LSG: Can CricBet99 Players Repeat Their Last Match’s Big Wins?",
              author: "Richard Konik",
              date: "April 1, 2025",
            },
          ].map((post, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.img}
                alt={post.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white">
                {post.title}
              </h3>
              <p className="text-yellow-400">
                {post.author} {post.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-yellow-400 text-center text-3xl font-bold mb-10">
          Review
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              text: `I've been using Cricbet99 for a while now, and their services are exceptional. The platform is incredibly easy to navigate, making it perfect for users of all experience levels. The app provides fast transaction solutions for withdrawals, and their customer support team is quick and helpful whenever I have questions.`,
              name: "Kirat N.",
            },
            {
              text: `When I first found Cricbet99’s exciting promotional offers, I signed up immediately, and I’m still amazed by their service. The welcome bonus was generous, and the additional promotions have kept the excitement going. Live betting is the standout feature, providing a smooth and enjoyable betting experience. Cricbet99 is definitely a top choice for any bettor."`,
              name: "Narmil K.",
            },
            {
              text: `After trying several sports betting systems, Cricbet99 is by far my favorite. The app performs excellently, offering a range of betting options for cricket, football, and other sports. The fast deposit and withdrawal options, along with responsive customer service, make Cricbet99 a top-tier sports betting platform for everyone.`,
              name: "Yash P.",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-yellow-500 rounded-xl p-6 text-center shadow-md"
            >
              <p className="italic mb-6">{review.text}</p>
              <h4 className="text-yellow-400 font-bold text-lg">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecentPostReviews;
