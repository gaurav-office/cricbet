import { useState } from "react";

const FooterLinksPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-2 text-sm text-gray-300">
          <p>
            <span className="text-orange-400 font-semibold">Cricbet99</span> |
            Cricbet99 App |{" "}
            <span className="text-orange-400 font-semibold">
              Cricbet99 Login
            </span>{" "}
            |{" "}
            <span className="text-orange-400 font-semibold">
              Cricbet99 Sports Betting
            </span>{" "}
            | www cricbet99 | welcome to cricbet99 | cricbet99 in | www
            cricbet99 com | Cricbet99 Register | Cricbet99
          </p>
          {showMore && (
            <p>
              Win | http cricbet99 com | cricbet99 in | Cricbet99 Club | www
              cricbet99 com login | http cricbet99 com login | cricbet99 com |
              cricbet99 in | http cricbet99 com
            </p>
          )}
          <button
            onClick={toggleShowMore}
            className="text-yellow-400 mt-2 hover:underline"
          >
            {showMore ? "Show Less ▲" : "Show More ▼"}
          </button>
        </div>

        <p className="text-gray-400 text-sm mt-4">
          Copyright © 2025 cricbet99.ind.in | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterLinksPage;
