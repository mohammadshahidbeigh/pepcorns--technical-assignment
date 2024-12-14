import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {BarChart2, Users, Clock} from "lucide-react";
import {RootState} from "../../store/store";
import StatCard from "./StatCard";
import {formatCurrency} from "../../utils/formatters";

const InvestmentDetails = () => {
  const investment = useSelector(
    (state: RootState) => state.investment.currentInvestment
  );

  const stats = [
    {
      icon: BarChart2,
      label: "Raised",
      value: formatCurrency(investment?.raised || 0),
      iconColor: "text-green-500",
    },
    {
      icon: Users,
      label: "Investors",
      value: investment?.investors || 0,
      iconColor: "text-blue-500",
    },
    {
      icon: Clock,
      label: "Days Left",
      value: investment?.daysLeft || 0,
      iconColor: "text-red-500",
    },
  ];

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
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  label={stat.label}
                  value={stat.value}
                  iconColor={stat.iconColor}
                />
              ))}
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
