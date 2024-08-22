import { useState } from "react";
import {
  CalendarOutlined,
  CalendarFilled,
  DatabaseFilled,
  DatabaseOutlined,
  EditOutlined,
  EditFilled,
} from "@ant-design/icons";
import { Header, MainSection } from "./App.styled";
import { Carousel } from "./components/carousel/Carousel";
import { Navigation } from "./components/navigation/Navigation";
import { Calendar } from "./components/calendar/Calendar";
import { TabContent } from "./App.type";
import { CardArea } from "./components/cardArea/CardArea";
import { Markers } from "./components/markers/Markers";

function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const contentArray: TabContent[] = [
    {
      id: 0,
      name: "Atividades",
      icon: activeTab === 0 ? <DatabaseFilled /> : <DatabaseOutlined />,
      content: <CardArea />,
    },
    {
      id: 1,
      name: "Marcações",
      icon: activeTab === 1 ? <EditFilled /> : <EditOutlined />,
      content: <Markers />,
    },
    {
      id: 2,
      name: "Calendário",
      icon: activeTab === 2 ? <CalendarFilled /> : <CalendarOutlined />,
      content: <Calendar />,
    },
  ];

  return (
    <MainSection>
      <Header>Republica Amoricana</Header>
      <Carousel
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        contentArray={contentArray}
      />

      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        contentArray={contentArray}
      />
    </MainSection>
  );
}

export default App;
