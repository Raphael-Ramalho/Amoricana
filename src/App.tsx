import { useEffect, useState } from "react";
import {
  CalendarOutlined,
  CalendarFilled,
  DatabaseFilled,
  DatabaseOutlined,
  EditOutlined,
  LoadingOutlined,
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
import { InstallButton } from "./components/installButton/InstallButton";
import { ActivityInfo, CardInfo } from "./types/types";
import { getDocs } from "firebase/firestore";
import { activitiesRef } from "./firebase";
import { Spin } from "antd";

function App() {
  const [currentUser, setCurrentUser] = useState<Members>();
  const [selectedCardId, setSelectedCardId] = useState<string>();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activityCards, setActivityCards] = useState<CardInfo[]>([]);

  const selectedCard = activityCards.find((card) => card.id === selectedCardId);

  useEffect(() => {
    const activities = async () => {
      if (!currentUser) return;

      const data = await getDocs(activitiesRef);

      const filteredActs = data.docs.filter((activity) => {
        const act = activity.data() as ActivityInfo;
        const members = act.membersInfo.map((info) => info.member);
        return members.includes(currentUser);
      });

      setActivityCards(
        filteredActs.map((activity) => {
          const cardInfo = activity.data() as ActivityInfo;
          return {
            ...cardInfo,
            id: activity.id,
            markedDates: new Set(cardInfo.markedDates),
          };
        })
      );
    };
    activities();
  }, [currentUser]);

  const contentArray: TabContent[] = [
    {
      id: 0,
      name: "Atividades",
      icon: activeTab === 0 ? <DatabaseFilled /> : <DatabaseOutlined />,
      content: (
        <CardArea
          setSelectedCardId={setSelectedCardId}
          setActiveTab={setActiveTab}
          setActivityCards={setActivityCards}
          activityCards={activityCards}
        />
      ),
    },
    {
      id: 1,
      name: "Marcações",
      icon: activeTab === 1 ? <EditFilled /> : <EditOutlined />,
      content: (
        <Markers
          currentUser={currentUser}
          selectedCard={selectedCard}
          setActivityCards={setActivityCards}
        />
      ),
    },
    // {
    //   id: 2,
    //   name: "Calendário",
    //   icon: activeTab === 2 ? <CalendarFilled /> : <CalendarOutlined />,
    //   content: (
    //     <Calendar activityCards={activityCards} currentUser={currentUser} />
    //   ),
    // },
  ];

  return (
    <MainSection>
      <Header>
        <BackButton
          type="link"
          onClick={() => {
            setActivityCards([]);
            setCurrentUser(undefined);
            setActiveTab(0);
          }}
        >
          {currentUser && <BackIcon />}
          <HeaderText>Republica Amoricana</HeaderText>
        </BackButton>

        <InstallButton />
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
