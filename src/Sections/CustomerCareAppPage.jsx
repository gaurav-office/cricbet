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
          Cricbet99 offers 24/7 customer support to ensure users have a smooth and enjoyable betting experience. The platform provides immediate assistance through its live chat feature on the website, where users can easily get help in real-time. For more detailed inquiries, users can contact Cricbet99 via email, with the support team responding promptly to resolve complex issues. 
Additionally, Cricbet99 offers fast WhatsApp support, enabling users to address concerns quickly. The round-the-clock availability of their customer care team ensures that any account issues, transaction problems, or service requests are handled efficiently and effectively.

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
          The Cricbet99 app allows users to access a wide range of sports markets, including cricket, football, tennis, and more, directly from their smartphones or tablets. With a user-friendly interface, the app simplifies the betting process, enabling bettors to easily navigate between options, view real-time scores, and manage their funds efficiently.
          </p>
          <p>
          Security is a top priority for Cricbet99, ensuring that all transactions and withdrawals are safe and secure. The app also offers rewarding account features, along with immediate customer support to address any issues that may arise
          </p>
          <p>
          Available for both Android and iOS devices, the Cricbet99 app keeps users updated with active notifications, ensuring they never miss important betting opportunities while on the go.
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
