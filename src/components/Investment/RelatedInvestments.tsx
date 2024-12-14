import {motion} from "framer-motion";
import {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

const investments = [
  {
    id: 1,
    name: "FuelGems",
    description: "Nanotechnology fuel additive which makes fuel more efficient",
    image:
      "https://plus.unsplash.com/premium_photo-1681400569389-02b0677b0c19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnVlbEdlbXN8ZW58MHx8MHx8fDA%3D",
    category: "Republic Funding Portal · Reg CF",
  },
  {
    id: 2,
    name: "32 Biosciences",
    description: "Gut microbiome medicine with an initial market opportunity",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    category: "Republic Funding Portal · Reg CF",
  },
  {
    id: 3,
    name: "Neural Direct",
    description: "AI-powered healthcare diagnostics enhancing patient outcomes",
    image:
      "https://media.istockphoto.com/id/1813489640/photo/chatbot-ai.webp?a=1&b=1&s=612x612&w=0&k=20&c=os8ITfdVcVI44ZkjUx9NZy9BZRtiMibgIZrni8or0pc=",
    category: "Republic Funding Portal · Reg CF",
  },
  {
    id: 4,
    name: "EcoCharge",
    description:
      "Innovative electric vehicle charging stations for urban areas",
    image:
      "https://media.istockphoto.com/id/1344957202/photo/a-lake-in-the-shape-of-a-rising-graph-in-the-middle-of-untouched-nature-symbolizing-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=uyYZ7BfZQv90LH7jDojsSHLBaWzEKF8njnBZagzDxNc=",
    category: "Republic Funding Portal · Reg CF",
  },
];

const RelatedInvestments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % investments.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? investments.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section with responsive layout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">
            Open for investment
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <p className="text-sm sm:text-base text-gray-600">
              Investors in SorbiForce also invested in these companies.
            </p>
            <button className="text-blue-600 hover:underline text-sm sm:text-base">
              View more
            </button>
          </div>
        </div>

        {/* Mobile-friendly carousel for smaller screens */}
        <div className="relative overflow-x-hidden">
          {/* Navigation buttons for mobile/touch devices */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 rounded-full p-2 sm:hidden"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 rounded-full p-2 sm:hidden"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable container with hidden overflow */}
          <div className="overflow-x-hidden">
            <div className="flex space-x-4 pb-4">
              {investments.map((investment, index) => (
                <motion.div
                  key={investment.id}
                  whileHover={{scale: 1.05}}
                  initial={{opacity: 0}}
                  animate={{
                    opacity: 1,
                    x: `-${currentIndex * 100}%`, // Mobile carousel effect
                  }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.5,
                  }}
                  className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={investment.image}
                    alt={investment.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">
                      {investment.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {investment.description}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {investment.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots for pagination with animation */}
        <div className="flex justify-center mt-4 space-x-2">
          {investments.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              whileHover={{scale: 1.2}}
              whileTap={{scale: 0.9}}
              transition={{duration: 0.2}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedInvestments;
