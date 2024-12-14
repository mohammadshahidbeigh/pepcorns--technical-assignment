import {Provider} from "react-redux";
import {store} from "./store/store";
import Navbar from "./components/Navigation/Navbar";
import TabNavigation from "./components/Navigation/TabNavigation";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Investment/Stats";
import Highlights from "./components/Investment/Highlights";
import DealTerms from "./components/Investment/DealTerms";
import TeamSection from "./components/Team/TeamSection";
import TeamPress from "./components/Team/Press";
import InvestorDetails from "./components/Team/InvestorDetails";
import RelatedInvestments from "./components/Investment/RelatedInvestments";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <RelatedInvestments />
          <TabNavigation />
          <Stats />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Highlights />
            <DealTerms />
          </div>
        </div>
        <TeamSection />
        <TeamPress />
        <InvestorDetails />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
