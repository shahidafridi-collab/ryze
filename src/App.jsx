import Hero from './components/Hero'
import PlatformLogos from './components/PlatfromLogos'
import AdAnalysis from './components/AdAnalysis';
import AccountAudits from './components/AccountAudits';
import Features from './components/Features';
import CampaignTable from './components/CampaignTable';
import Testimonials from './components/Testimonials';
import StatsBanner from './components/StatsBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PlatformLogos />
      <AdAnalysis />
      <AccountAudits />
      <Features />
      <CampaignTable />
      <Testimonials />
      <StatsBanner />
      <Footer />
    </div>
  );
}

export default App;
