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
              text: `Users who use Cricbet99 as their sports betting platform benefit from its exceptional services which I have continually experienced for some time. Users with any level of experience can easily bet through the platform because its interface remains straightforward. The application provides swift transaction solutions for withdrawals. The platform maintains quick and supportive staff who answer my questions whenever needed.`,
              name: "Kirat N.",
            },
            {
              text: `The moment I discovered Cricbet99's exciting promotional offers I signed up and these days I am truly amazed by their service. The welcome bonus had a really nice amount while additional promotional offers maintained excitement throughout my time using the platform. Live betting appears as the standout feature of the platform which provides users with a polished betting experience. Your search for a strong betting app should end with Cricbet99.`,
              name: "Narmil K.",
            },
            {
              text: `The many different sports betting systems I have used make Cricbet99 my preferred option. The app delivers perfect performance through its betting options for cricket alongside football and various other sports. The platform offers fast deposit and withdrawal capabilities together with responsive customer service. Cricbet99 offers everyone an excellent sports betting opportunity.`,
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
