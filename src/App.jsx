import Toc from "./Sections/Toc.jsx";
import About from "./Sections/About.jsx";
import CasinoGamesPage from "./Sections/CasinoGamesPage.jsx";
import CustomerCareAppPage from "./Sections/CustomerCareAppPage.jsx";
import DepositWithdrawalPage from "./Sections/DepositWithdrawalPage.jsx";
import Faqs from "./Sections/faqs.jsx";
import FooterLinkPage from "./Sections/FooterLinkPage.jsx";
import HowToBet from "./Sections/HowToBet.jsx";
import KeyFeatures from "./Sections/KeyFeaturesPage.jsx";
import PromotionsBonusesPage from "./Sections/PromotionsBonusesPage.jsx";
import RecentPostReviews from "./Sections/RecentPostReviews.jsx";
import SportsBettingGamesPage from "./Sections/SportsBettingGamesPage.jsx";
import Steps from "./Sections/Steps.jsx";
import WhatIsCricbet99ID from "./Sections/WhatIsCricbet99ID.jsx";
import WhatisCricket99 from "./Sections/WhatisCricket99.jsx";

const App = () => {
  return (
    <div>
      <Toc />
      <About />
      <CasinoGamesPage />
      <CustomerCareAppPage />
      <DepositWithdrawalPage />

      <HowToBet />
      <KeyFeatures />
      <PromotionsBonusesPage />
      <RecentPostReviews />
      <SportsBettingGamesPage />
      <Steps />
      <WhatIsCricbet99ID />
      <WhatisCricket99 />
      <Faqs />
      <FooterLinkPage />
    </div>
  );
};

export default App;
