import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {BarChart, Users, Clock} from "lucide-react";

const InvestmentDetails = () => {
  const investment = useSelector(
    (state: RootState) => state.investment.currentInvestment
  );

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Format a number as a US dollar amount with no decimal places.
   *
   * @param {number} amount
   * @returns {string}
   */
  /******  a408aaa7-5327-4b0d-918c-4b633e282479  *******/
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Investment Overview</h2>
            <div className="space-y-8">
              <div className="flex items-center">
                <BarChart className="h-8 w-8 text-green-500 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Raised</p>
                  <p className="text-xl font-bold">
                    {formatCurrency(investment?.raised || 0)}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Investors</p>
                  <p className="text-xl font-bold">{investment?.investors}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="h-8 w-8 text-red-500 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Days Left</p>
                  <p className="text-xl font-bold">{investment?.daysLeft}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src={investment?.imageUrl}
              alt="Investment visualization"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InvestmentDetails;
