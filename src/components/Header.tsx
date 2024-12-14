import {Menu, Search, User} from "lucide-react";
import {motion} from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{y: -100}}
      animate={{y: 0}}
      className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer" />
            <span className="text-2xl font-bold">Republic</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Invest
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Raise
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Learn
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-500 cursor-pointer" />
              <User className="h-5 w-5 text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
