// import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section
      title="about-us"
      id="about-us"
      className="w-full py-20 px-8 sm:px-16 bg-gray-50 text-[#343434]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 font-montserrat text-[#636363]">
          About <span className="text-[#111111]">Shree Jee Legal</span>
        </h2>
        <p className="text-lg text-center text-gray-700 mb-16 max-w-3xl mx-auto font-montserrat">
          Shree Jee Legal is a premier law firm based in Jaipur, offering expert
          legal solutions across diverse practice areas. With a steadfast
          commitment to integrity, precision, and excellence, we strive to
          provide our clients with unparalleled legal support tailored to their
          needs.
        </p>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Litigation and Dispute Resolution Card */}
          <motion.div
            className="bg-gray-100 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00BFFF] scrollbar-track-[#f1f1f1]"
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center font-montserrat text-[#020202]">
              Litigation and Dispute Resolution
            </h3>
            <ul className="text-justify text-gray-950 space-y-3 text-sm sm:text-base font-montserrat">
              <li>
                ✔ Commercial Disputes (Dispute Resolution under Companies Act,
                2013, Arbitration and Conciliation Act, 1996, MSMED Act, 2006,
                Civil Dispute under Code of Civil Procedure, 1908 read with
                Commercial Court Act, Insolvency and Bankruptcy Code, 2016 etc.)
              </li>
              <li>✔ Consumer Disputes</li>
              <li>✔ Family and Matromonial Disputes</li>
              <li>✔ Corporate Insolvency Resolution</li>
              <li>✔ Civil Disputes</li>
              <li>✔ Violation of Intellectual Property Rights</li>
              <li>✔ Cross Border Litigation and Investigations</li>
              <li>✔ Domestic and International Arbitrations</li>
              <li>✔ Micro Small Enterprises Litigation</li>
              <li>✔ Property Laws</li>
              <li>✔ Real Estate Litigation</li>
              <li>✔ Recovery proceedings under various Laws</li>
              <li>✔ Tax Litigation (Direct/Indirect)</li>
              <li>
                ✔ Departmental Inquiry, Investigation, Adjudication Notices etc.
              </li>
              <li>
                ✔ Cases under SARFAESI Act, 2002, The Recovery of Debts due to
                Banks and Financial Institutions Act, 1993
              </li>
              <li>
                ✔ Cases under RTPP Act, 2012, Electricity Cases before RERC,
                Motor Vehicle Act, Cases under SEBI Act etc.
              </li>
            </ul>
          </motion.div>

          {/* Criminal Litigation Card */}
          <motion.div
            className="bg-gray-100 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00BFFF] scrollbar-track-[#f1f1f1]"
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center font-montserrat text-[#020202]">
              Criminal Litigation
            </h3>
            <ul className="text-justify text-gray-950 space-y-3 text-sm sm:text-base font-montserrat">
              <li>✔ Benami Transactions Frauds</li>
              <li>✔ Corporate Frauds</li>
              <li>✔ Criminal Complaints</li>
              <li>✔ Criminal Trial</li>
              <li>✔ Criminal Writs / Petitions / Revisions / Appeals</li>
              <li>✔ Defamation Cases</li>
              <li>✔ Family and Matromonial Disputes</li>
              <li>✔ Dishonour of Cheques</li>
              <li>✔ Misappropriation and Siphoning off of Funds</li>
              <li>✔ Narcotics and Drugs Violation</li>
              <li>✔ Prevention of Corruption Act</li>
              <li>✔ Prevention of Money Laundering Act</li>
              <li>✔ Property fraud cases</li>
              <li>✔ Quashing of FIRs / Trial</li>
              <li>✔ Bails (Regular / Anticipatory)</li>
              <li>✔ Serious Frauds Investigation office</li>
              <li>✔ White Collar Crimes including Economic Offences</li>
            </ul>
          </motion.div>

          {/* Non-Litigation Consultancy and Advisory Services Card */}
          <motion.div
            className="bg-gray-100 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00BFFF] scrollbar-track-[#f1f1f1]"
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center font-montserrat text-[#020202]">
              Non-Litigation: Consultancy and Advisory Services
            </h3>
            <ul className="text-gray-950 space-y-3 text-sm sm:text-base font-montserrat text-justify">
              <li>
                ✔ All aspects of commercial and company related affairs,
                including advice, drafting and structuring corporate
                transactions and business contracts, shareholders agreements,
                share purchase agreements, incorporation of companies,
                takeovers, mergers & de-mergers, acquisitions, amalgamations,
                management buy-outs, equity related transactions like venture
                capital funding, private equity funding, joint ventures, etc.,
                and other commercial contracts
              </li>
              <li>
                ✔ Insolvency Professional support - Valuation, Forensic
                Advisory, Liquidation realisation and Resolution Plan
              </li>
              <li>✔ Consultancy in the matter of Transfer Pricing</li>
              <li>✔ Financial Advisory</li>
              <li>✔ Business Valuation</li>
              <li>✔ Investment Management under FEMA Act</li>
              <li>
                ✔ Distress Asset Management and Consultancy and helping
                defaulters in Negotiating terms with bankers/financial
                institutions
              </li>
              <li>✔ Real Estate Management Planning under RERA</li>
              <li>
                ✔ Drafting of Legal Opinion under Companies Act, 2013, FEMA,
                1999 and other allied laws
              </li>
              <li>
                ✔ Restructuring of Partnership firm considering taxation
                concerns
              </li>
              <li>✔ Managing Financial and Legal Risks</li>
              <li>
                ✔ Due Diligence of prospective investee companies including Risk
                analysis in case of Private Equity Investment and compliances as
                per Company Act, 2013
              </li>
              <li>
                ✔ Legal Due Diligence in case of Companies proposed for IPO and
                FPO as per SEBI Act
              </li>
              <li>
                ✔ Advice and representing multinational corporations, financial
                institutions and trade associations on foreign direct investment
                into India
              </li>
              <li>
                ✔ Advising Foreign Clients to set up their business entity in
                India
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shreejeelegalprofile"
            className="px-10 py-5 bg-gradient-to-r from-[#b4b4b4] to-[#7a7a7a] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg tracking-wide rounded"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
