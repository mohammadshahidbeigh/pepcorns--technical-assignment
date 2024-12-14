import {motion} from "framer-motion";
import ReactPlayer from "react-player";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

const Hero = () => {
  const investment = useSelector(
    (state: RootState) => state.investment.currentInvestment
  );

  return (
    <div className="pt-16">
      <div className="relative">
        <div className="h-[60vh] w-full relative">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=your-video-id"
            width="100%"
            height="100%"
            playing
            loop
            muted
            className="absolute top-0 left-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          className="absolute inset-0 flex items-center justify-center text-white"
        >
          <div className="max-w-3xl text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {investment?.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {investment?.description}
            </p>
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Invest Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
