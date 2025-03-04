import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AboutUs from "./Sections/AboutUs";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Team from "./Sections/Team";
import Profile from "./Sections/Profile"; // Import Profile
import { useState, useEffect } from "react";
import BookingForm from "./Sections/BookingForm";
import ShreeJeeLegalProfile from "./Sections/shreejeelegalprofile";
import { RachitSharma, Hanumant } from "./assets";
import { Shashank } from "./assets";
import Disclaimer from "./Sections/Disclaimer";
import ContactUs from "./Sections/contact-us";
const profileData = [
  {
    url: "/profile/Mr_Rachit_Sharma",
    profilePicture: RachitSharma,
    name: "Mr. Rachit Sharma",
    title: "Advocate & Legal Advisor",
    qualifications: "B.Com, C.S., LL.B, Cert. IPR ",
    expertise: {
      qualifications:
        "Handles company law matters, commercial cases, and due diligence for companies offering IPOs and FPOs. Expertise in corporate restructuring and litigation.",
      keyAreas: [
        "Dispute Resolution under Companies Act, 2013, Arbitration and Conciliation Act, 1996, MSMED Act, 2006, Civil Dispute under Code of Civil Procedure, 1908 read with Commercial Court Act, Insolvency and Bankruptcy Code, 2016.;",
        "Cases under Negotiable Instrument Act, RERA Act, Consumer Cases, Motor Vehicle Act etc.",
        "SARFAESI Act, 2002, The Recovery of Debts due to Banks and Financial Institutions Act, 1993.",
        "Misc. Cases under RTPP Act, 2012, Electricity Cases before RERC, Motor Vehicle Act, Cases under SEBI Act etc.",
        "Investment Management under FEMA Act.",
        "Real Estate Management Planning under RERA.",
        "Empaneled Advocate for Rajasthan University of Health Sciences and have vide experience for several Government Departments.",
        "Represented various Govt. Departments viz. RSEB Companies (AVVNL, JVVNL, JDVVNL etc.), RIICO, JDA, ACCB, RUHS, RFC, RHB, RRVPNL, RRVUNL etc.",
        "Matters before High Court, Arbitration Tribunal, NCLT, JDA Tribunal, MSME Council, RAT Tribunal, CAT Tribunal etc. and Medical Negligence cases, NHRC Cases, DRT Matters etc.",
        "Also doing the drafting and vetting of MOU’s, Joint Venture Agreements, Shareholder’s Agreements, Share Purchase Agreement, Takeover Agreements and various other allied Agreements.",
      ],
    },
    experience: "9 Years of professional experience.",
  },
  {
    url: "/profile/Mr_Shashank_Pancholi",
    profilePicture: Shashank,
    name: "Mr. Shashank Pancholi",
    title: "Advocate & Legal Consultant",
    qualifications: "B.A LLB(Hons)",
    expertise: {
      qualifications:
        "He handles a wide range of criminal cases, specializing in innovative defense strategies. His expertise extends to white-collar crimes and other complex criminal matters.",
      keyAreas: [
        "We provide comprehensive legal services covering all types of criminal trial procedures, including bail matters and anticipatory bail, appeal revision, suspension of sentence criminal writ etc. Our law firm handles Criminal appeals, Criminal revisions, Criminal Misc. Petitions, Suspension of sentence Applications before the trial court or High Court. Our expertise extends to economic offences and other offences which are handled by specialized agencies such as CBI, ED, NCB, NIA etc. We also assist in tax evasion cases, including situations where GST or income tax notices have been served. Additionally, and also help out through their trials and appeals in departments or courts. we offer complete support in matters related to anti-dowry laws, including criminal prosecutions involving the husband, in-laws, or other family members. We also specialize in Excise matters or fraud committed against property or in terms of monetary.",
        "<strong> Crime against person </strong> -These are serious and often highly motivated crimes in our society, where an innocent individual may sometimes be wrongly implicated or framed as the organizer. We provide personalized assistance and support at every stage, including trial, appeal, suspension, in both trial courts and high courts, Attempt to murder (Section 307, IPC), Rape (Section 376, IPC), Kidnapping and abduction (Section 363-373, IPC), Assault (Section 351-357, IPC) Dowry Death (Section 304B, IPC) Domestic violence (Protection of Women from Domestic Violence Act, 2005).",
        "Crimes Against Property: Theft (Section 378, IPC), Burglary (Section 457-460, IPC) Robbery (Section 390-402, IPC), Dacoity (Section 391-396, IPC), Criminal breach of trust (Section 405, IPC) Forgery (Section 463-477, IPC).",
        "White-Collar Crimes: Fraud (Section 420, IPC) Money laundering (Prevention of Money Laundering Act, 2002), Tax evasion (Income Tax Act, 1961), Corruption (Prevention of Corruption Act, 1988).",
        "Cyber Crimes: Hacking (Section 66, Information Technology Act, 2000), Identity theft (Section 66C, Information Technology Act, 2000), Cyberstalking (Section 66A, Information Technology Act, 2000), Data theft (Section 43, Information Technology Act, 2000).",
        "Drug-Related Offenses: Drug trafficking and consumption (Narcotic Drugs and Psychotropic Substances Act, 1985), Possession of illegal substances (Section 20-25, Narcotic Drugs and Psychotropic Substances Act, 1985).",
        "Sexual Offenses: Rape (Section 376, IPC), Sexual harassment (Section 354, IPC), Molestation (Section 354A, IPC).",
        "Motor Vehicles Act, 1988 accident and claims)-Reckless driving (Section 279, IPC), Hit and run (Section 304A, IPC), Driving without license (Section 181, Motor Vehicles Act, 1988).",
        "Terrorism: where generally special agencies will investigate CBI, NIA etc.-Unlawful Activities (Prevention Act, 1967), Terrorist financing (Section 3, Unlawful Activities Prevention Act).",
        "Economic Crimes-where generally ED, GST Team, CBI, Local police will investigate- Corruption (Prevention of Corruption Act, 1988), Cheque dishonor (Section 138, Negotiable Instruments Act, 1881), Blackmail (Section 384, IPC), unproportionate of Assets, GST fraud.",
        "Environmental Crimes: Illegal mining (Mines and Minerals Act, 1957), Pollution and waste dumping (Environmental Protection Act, 1986), Poaching and wildlife crimes (Wildlife Protection Act, 1972).",
      ],
    },
    experience: "4 Years of professional experience.",
  },
  {
    url: "/profile/Mr_Hanumant_Singh_Shekhawat",
    profilePicture: Hanumant,
    name: "Mr. Hanumant Singh Shekhawat",
    title: "Advocate",
    custom: "weefgr",
    qualifications: "BBA-LLB (Hons.), LLM (Criminal Law) ",
    expertise: {
      qualifications:
        "Handles service law related matters, Commercial Cases, Debt Recovery cases, RERA, Consumer Cases etc..",
      keyAreas: [
        "Cases under Negotiable Instrument Act, RERA Act, Consumer Cases, Motor Vehicle Act etc.;",
        "SARFAESI Act, 2002, The Recovery of Debts due to Banks and Financial Institutions Act, 1993.",
        "Misc. Cases under RTPP Act, 2012, Electricity Cases before RERC, Motor Vehicle Act, Cases under SEBI Act etc.; ",
        "Income Tax and Commercial Tax cases; ",
        "Real Estate Management Planning under RERA; ",
        "Represented various Govt. Departments viz. Stamps, Forest, Mines, RSEB Companies (AVVNL, JVVNL, JDVVNL etc.), RIICO, JDA, ACCB, RUHS, RFC, RHB, RRVPNL, RRVUNL , etc;",
        "Matters before High Court, Arbitration Tribunal, NCLT, JDA Tribunal, MSME Council, RAT Tribunal, CAT Tribunal etc. and Medical Negligence cases, NHRC Cases, DRT Matters etc.; ",
        "Also doing the drafting and registering the several types of Deeds before the Sub-Registrar’s Office;",
        // Add more key areas as needed
      ],
    },
    experience: "4 Years of professional experience.",
  },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    const disclaimerAccepted = localStorage.getItem("disclaimerAccepted");
    if (showDisclaimer) {
      setShowDisclaimer(false);
    }
  }, []);

  const handleAcceptDiaclaimer = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setShowDisclaimer(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/ShreeJeeLegalProfile",
  //     element: (
  //       <>
  //         <ShreeJeeLegalProfile />
  //       </>
  //     ),
  //   },
  // ]);

  return (
    <Router>
      {showDisclaimer && <Disclaimer onAccept={handleAcceptDiaclaimer} />}
      <>
        <section>
          <Nav />
        </section>

        <Routes>
          <Route path={"/Team"} element={<Team />} />
          {profileData.map((d) => {
            return (
              <Route path={d.url} key={d.url} element={<Profile data={d} />} />
            );
          })}
          <Route
            path={"/shreejeelegalprofile"}
            element={<ShreeJeeLegalProfile />}
          />
          <Route path={"/contact-us"} element={<ContactUs />} />
          <Route
            path="/"
            element={
              <main>
                <Hero openModal={openModal} />
                <section
                  className={`background-content ${
                    isModalOpen && showDisclaimer ? "background-blur" : ""
                  }`}
                >
                  <AboutUs />
                </section>
                <section
                  className={`background-content ${
                    isModalOpen && showDisclaimer ? "background-blur" : ""
                  }`}
                >
                  <Team />
                </section>

                {/* Modal for Booking Form */}
                {isModalOpen && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <button className=" close-btn" onClick={closeModal}>
                        X
                      </button>
                      <BookingForm />
                    </div>
                  </div>
                )}
              </main>
            }
          />
        </Routes>

        <footer>
          <Footer />
        </footer>
      </>
    </Router>
  );
}

// import Disclaimer from "./Sections/Disclaimer";
