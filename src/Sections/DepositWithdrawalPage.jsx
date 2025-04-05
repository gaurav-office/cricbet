const DepositWithdrawalPage = () => {
  const depositSteps = [
    "Log In: Start your Cricbet99 account session by entering your email and password combination.",
    "Navigate to Deposit: The 'Deposit' option appears within your account dashboard to click.",
    "Select Payment Method: Choose from various options, including:",
    "Credit/Debit Cards: Visa and Mastercard.",
    "UPI: You can use PhonePe together with Paytm and Google Pay as payment apps.",
    "Net Banking: Direct bank transfers.",
    "E-Wallets: Options like Skrill and Neteller.",
    "Enter Amount: Users must input the desired deposit amount which is a minimum of ₹500.",
    "Confirm Transaction: Complete your deposit by following all instructions on screen.",
  ];

  const withdrawalSteps = [
    "Log In: Access your Cricbet99 account.",
    "Navigate to Withdraw: Select the 'Withdraw' button which appears in your account dashboard.",
    "Select Withdrawal Method:",
    "Bank Transfer: Direct transfer to your bank account.",
    "E-Wallets: Such as Skrill and Neteller.",
    "Enter Amount: Specify the withdrawal amount (minimum ₹1,000).",
    "Confirm Transaction: Submit your withdrawal request.",
    "Processing Time: The withdrawal process begins as soon as your account passes verification checks and completion takes up to 10 minutes.",
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="text-center mb-4">
        <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded mb-6">
          Play Casino Games
        </button>
        <h1 className="text-3xl font-bold text-yellow-500 mb-4">
          Cricbet99: Step-by-Step Deposit & Withdrawal Process
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Depositing Funds */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">
            Depositing Funds
          </h2>
          <ul className="space-y-2">
            {depositSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-400">📌</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              Deposite Fund
            </button>
          </div>
        </div>

        {/* Withdrawing Funds */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">
            Withdrawing Funds
          </h2>
          <ul className="space-y-2">
            {withdrawalSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-400">📌</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              Withdrawal Your Winning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositWithdrawalPage;
