import React from "react";
import MovingLine from "../components/MovingLine"; // Adjust the path if necessary
import {LampDemo} from "../components/ModernSection"; // Import ModernSection
import ModernGrid from "../components/ModernGrid";
import ModernSlider from "../components/ModernSlider";
import ModernGridSection from "../components/ModernGridSection";
import {LayoutGridDemo} from "../components/LayoutGridDemo";
import {InfiniteMovingCardsDemo} from "../components/InfiniteMovingCards";
import YouTubeSection  from "../components/YouTubeSection";
 import {FocusCardsDemo} from "../components/FocusCardsDemo"; // Import GlobeDemo

const HomePage = () => {
  return (
    <div>
      {/* Moving line directly under the navbar */}
      <MovingLine />
       {/* Modern Section */}
    <LampDemo/>
    <ModernGrid />
      <main style={{ padding: "10px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 45%", maxWidth: "45%", margin: "1rem", minWidth: "300px" }}>
            <ModernSlider title="Our Dealer " />
          </div>
          <div style={{ flex: "1 1 45%", maxWidth: "45%", margin: "1rem", minWidth: "300px" }}>
            <ModernSlider title="Our Sellers" />
          </div>
        </div>
        <ModernGridSection />
        <LayoutGridDemo/>
        <InfiniteMovingCardsDemo />
        <YouTubeSection />
        <FocusCardsDemo />
      </main>
    </div>
  );
};

export default HomePage;
