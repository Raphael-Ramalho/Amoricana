import { createRef, Dispatch, SetStateAction, useEffect } from "react";
import { Container, Option, StyledCarousel } from "./Carousel.styled";
import { CarouselRef } from "antd/es/carousel";
import { Calendar } from "../calendar/Calendar";

type CarouselProps = {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
};

const boxes = (value: object) => (
  <div
    style={{ width: "300px", height: "300px", margin: "30px auto", ...value }}
  />
);

const contentArray = [
  boxes({ backgroundColor: "red" }),
  <Calendar />,
  boxes({ backgroundColor: "yellow" }),
];

export const Carousel = ({ activeTab, setActiveTab }: CarouselProps) => {
  const carouselRef = createRef<CarouselRef>();

  useEffect(() => {
    if (carouselRef.current) carouselRef.current.goTo(activeTab);
  }, [activeTab, carouselRef]);

  return (
    <Container>
      <StyledCarousel
        ref={carouselRef}
        afterChange={setActiveTab}
        swipe={true}
        infinite={false}
      >
        {contentArray.map((content) => (
          <div>
            <Option>{content}</Option>
          </div>
        ))}
      </StyledCarousel>
    </Container>
  );
};
