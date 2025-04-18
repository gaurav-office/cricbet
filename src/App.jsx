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
import Navbar from "./Sections/Navbar.tsx";
import LoginPage from "./Sections/Login.tsx";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Footer from "./Sections/Footer.tsx";
import Ttop from "./assets/images/Homepage.png";
// import Second from "./images/second.png";
// import Third from "./images/third.png";
// import slotImg from './assets/Slots.png';


const App = () => {
  return (
    <div>
      <BrowserRouter
      // future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Navbar />
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <main>
                <img src={Ttop} width="100%"/>
             
                <Toc />
                <About />
                <WhatisCricket99 /> 
                {/* <img className="h-100 w-5" src={Second} /> */}
                
                <Steps />
                
                <HowToBet />
                {/* <img src={Third} /> */}
                <SportsBettingGamesPage />
                <CasinoGamesPage />
                {/* <DepositWithdrawalPage /> */}
                <PromotionsBonusesPage />
                <WhatIsCricbet99ID />
                <KeyFeatures />
                <CustomerCareAppPage />
                <RecentPostReviews />
                <Faqs />{" "}
              </main>
            }
          />
        </Routes>
        <Footer />
        <FooterLinkPage />
      </BrowserRouter>
      {/* <LoginPage /> */}
    </div>
  );
};

export default App;
