
import DisclaimerBanner from "./components/DisclaimerBanner";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <DisclaimerBanner />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <FeatureSection />
          <HowItWorksSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
