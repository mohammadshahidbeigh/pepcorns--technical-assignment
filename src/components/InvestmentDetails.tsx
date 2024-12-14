import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {BarChart, Users, Clock} from "lucide-react";

const InvestmentDetails = () => {
  const investment = useSelector(
    (state: RootState) => state.investment.currentInvestment
  );

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
      className="py-8 sm:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* SorbiForce Center Title */}
          <h2 className="text-3xl font-bold mb-8 text-center">SorbiForce</h2>

          {/* Responsive Grid for Investment Details */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Investment Overview Column */}
            <div className="order-2 md:order-1">
              <div className="space-y-6">
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

            {/* Image Column */}
            <div className="order-1 md:order-2 flex justify-center items-center">
              <img
                src={investment?.imageUrl}
                alt="Investment visualization"
                className="rounded-lg shadow-xl w-full max-w-md h-auto md:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InvestmentDetails;
