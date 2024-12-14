import {motion} from "framer-motion";
import {DollarSign, Users, Clock} from "lucide-react";

const Stats = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-6 rounded-lg shadow-sm"
    >
      <div className="text-center">
        <DollarSign className="h-8 w-8 mx-auto text-green-500 mb-2" />
        <div className="text-3xl font-bold mb-1">$389,639</div>
        <div className="text-gray-600">Raised</div>
      </div>

      <div className="text-center">
        <Users className="h-8 w-8 mx-auto text-blue-500 mb-2" />
        <div className="text-3xl font-bold mb-1">399</div>
        <div className="text-gray-600">Investors</div>
      </div>

      <div className="text-center">
        <Clock className="h-8 w-8 mx-auto text-red-500 mb-2" />
        <div className="text-gray-600">Successfully funded and closed</div>
        <div className="text-gray-600">on December 10, 2024</div>
      </div>
    </motion.div>
  );
};

export default Stats;
