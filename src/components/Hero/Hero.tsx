import {motion} from "framer-motion";
import ReactPlayer from "react-player";
import {Star, Share2} from "lucide-react";
import {DollarSign, Users, Clock} from "lucide-react";

const Stats = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://uploads.republic.com/p/offerings/logos/small/000/010/305/10305-1720472679-01549fa058659cd1f5d836d94f846fd60c1e342d.png"
              alt="SorbiForce"
              className="h-12 w-12 rounded"
            />
            <h1 className="text-4xl font-bold">SorbiForce</h1>
          </div>
          <div className="flex space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Star className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Share2 className="h-6 w-6" />
            </button>
          </div>
        </div>

        <p className="text-xl text-gray-600 mb-6">
          World's first non-metal sustainable battery built for the circular
          economy
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "B2B",
            "SUBSCRIPTION",
            "GREEN POWER",
            "REDUCE, REUSE, RECYCLE",
            "RENEWABLES",
            "MATERIALS",
            "HARDWARE",
            "IOT",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-full text-sm shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Layout for Stats and Video Player */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Video Player Section on the Left (full width on small screens) */}
          <div className="flex-1">
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <ReactPlayer
                url="https://youtu.be/58_rihbGiic?si=ApvO8jOmOMz0acuw"
                width="100%"
                height="100%"
                controls
                light={true}
              />
            </motion.div>
          </div>

          {/* Stats Section on the Right */}
          <div className="flex-1">
            <Stats />
            {/* Blue Button below the Stats Section */}
            <div className="flex justify-center mt-8">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transform transition duration-300 hover:scale-105">
                💹 Invest in SorbiForce
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
