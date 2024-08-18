import { createRef, Dispatch, SetStateAction, useEffect } from "react";
import { Container, Option, StyledCarousel } from "./Carousel.styled";
import { CarouselRef } from "antd/es/carousel";

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
  {
    id: 0,
    content: boxes({ backgroundColor: "red" }),
  },
  {
    id: 1,
    content: boxes({ backgroundColor: "green" }),
  },
  {
    id: 2,
    content: boxes({ backgroundColor: "yellow" }),
  },
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
        {contentArray.map(({ content }) => (
          <Option>{content}</Option>
        ))}
      </StyledCarousel>
    </Container>
  );
};
