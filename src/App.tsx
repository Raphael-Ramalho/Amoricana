import { useState } from "react";
import { MainSection } from "./App.styled";
import { Carousel } from "./components/carousel/Carousel";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <MainSection>
      <Carousel activeTab={activeTab} setActiveTab={setActiveTab} />

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </MainSection>
  );
}

export default App;
