import {UserPlus} from "lucide-react"; // Import appropriate icons from lucide-react

const InvestorDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://uploads.republic.com/p/offerings/logos/small/000/010/305/10305-1720472679-01549fa058659cd1f5d836d94f846fd60c1e342d.png"
            alt="SorbiForce"
            className="h-12 w-12 rounded"
          />
          <h1 className="text-3xl font-bold">SorbiForce</h1>
        </div>
        <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-full flex items-center space-x-2">
          <UserPlus className="h-5 w-5" />
          <span>Follow</span>
        </button>
      </div>

      <div className="text-xl text-gray-700 mb-4">
        <p className="font-semibold text-green-600">
          SorbiForce successfully raised $389,639 from 399 investors on December
          10, 2024
        </p>
      </div>

      <div className="flex items-center mb-4 space-x-2">
        {/* Investor Faces */}
        {[
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
          "https://randomuser.me/api/portraits/men/3.jpg",
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
        ].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Investor ${index + 1}`}
            className="h-12 w-12 rounded-full border-2 border-white"
          />
        ))}
      </div>

      <div className="text-gray-600">
        <span className="font-semibold">
          William, Draven, MICHAEL, Vida, Gayane
        </span>
        , and 394 others invested.
      </div>

      <div className="mt-2">
        <a href="/reviews" className="text-blue-600 hover:underline">
          57 Reviews
        </a>
      </div>
    </div>
  );
};

export default InvestorDetails;
