const CustomerCareAppPage = () => {
  return (
    <div className="bg-orange-500 text-black p-8">
      {/* Customer Care Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-16">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-center md:text-left">
            Cricbet99 Customer Care
          </h2>
          <p>
            The betting platform Cricbet99 provides continuous customer support
            as a way to help users enjoy seamless betting. Users can immediately
            access assistance from support staff by using the web-based live
            chat feature that operates on their website. Contact Cricbet99
            through their email for complex questions while their support staff
            can respond immediately to your calls. You can resolve issues
            through fast WhatsApp support. Spinning service availability round
            the clock empowers their customer care staff to deliver prompt
            resolutions applying to account problems and transaction services
            and service requirements.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded w-fit">
            Contact Us
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/customer-care.png"
            alt="Cricbet99 Customer Care"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* App Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-center md:text-left text-black-400">
            Cricbet99 App
          </h2>
          <p>
            Cricbet99 App can access different sports markets such as cricket
            football tennis and other games through the mobile application that
            operates on smartphones and tablets.
          </p>
          <p>
            Bettors experience simplified betting with Cricbet99 due to its
            user-friendly platform and its capability to transfer between
            options and display real-time scoring as well as manage funds
            effectively. Security stands as a primary focus to ensure secure
            transactions and withdrawals and the platform also provides
            rewarding account opportunities as well as immediate customer
            support.
          </p>
          <p>
            Cricbet99 offers its app for both Android and iOS users who can
            receive immediate betting updates through active notifications any
            time they are mobile.
          </p>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded w-fit">
            Download Cricbet99 App
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/cricbet99-app.png"
            alt="Cricbet99 App"
            className="rounded-xl"
          />
        </div>
      </section>
    </div>
  );
};

export default CustomerCareAppPage;
