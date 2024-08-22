import { useState } from "react";
import {
  CalendarOutlined,
  CalendarFilled,
  DatabaseFilled,
  DatabaseOutlined,
  EditOutlined,
  EditFilled,
} from "@ant-design/icons";
import {
  BackButton,
  BackIcon,
  Header,
  HeaderText,
  MainSection,
} from "./App.styled";
import { Carousel } from "./components/carousel/Carousel";
import { Navigation } from "./components/navigation/Navigation";
import { Calendar } from "./components/calendar/Calendar";
import { TabContent } from "./App.type";
import { CardArea } from "./components/cardArea/CardArea";
import { Markers } from "./components/markers/Markers";
import { Login } from "./components/login/Login";
import { Members } from "./enum/enums";
import { CardInfo } from "./components/cardArea/card/Card.type";

function App() {
  const [currentUser, setCurrentUser] = useState<Members>();
  const [selectedCard, setSelectedCard] = useState<CardInfo>();
  const [activeTab, setActiveTab] = useState<number>(0);

  const contentArray: TabContent[] = [
    {
      id: 0,
      name: "Atividades",
      icon: activeTab === 0 ? <DatabaseFilled /> : <DatabaseOutlined />,
      content: (
        <CardArea
          setSelectedCard={setSelectedCard}
          setActiveTab={setActiveTab}
        />
      ),
    },
    {
      id: 1,
      name: "Marcações",
      icon: activeTab === 1 ? <EditFilled /> : <EditOutlined />,
      content: (
        <Markers currentUser={currentUser} selectedCard={selectedCard} />
      ),
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
      <Header>
        <BackButton
          type="link"
          onClick={() => {
            setCurrentUser(undefined);
            setActiveTab(0);
          }}
        >
          {currentUser && <BackIcon />}
          <HeaderText>Republica Amoricana</HeaderText>
        </BackButton>
      </Header>
      {!currentUser ? (
        <Login setCurrentUser={setCurrentUser} />
      ) : (
        <>
          <Carousel
            activeTab={activeTab}
            contentArray={contentArray}
            selectedCard={selectedCard}
            setActiveTab={setActiveTab}
          />

          <Navigation
            activeTab={activeTab}
            contentArray={contentArray}
            selectedCard={selectedCard}
            setActiveTab={setActiveTab}
          />
        </>
      )}
    </MainSection>
  );
}

export default App;
