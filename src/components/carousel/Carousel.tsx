import { createRef, useEffect } from "react";
import {
  Container,
  Option,
  OptionContainer,
  StyledCarousel,
} from "./Carousel.styled";
import { CarouselRef } from "antd/es/carousel";
import { GeneralProps } from "../../App.type";

export const Carousel = ({
  activeTab,
  setActiveTab,
  contentArray,
}: GeneralProps) => {
  const carouselRef = createRef<CarouselRef>();

  useEffect(() => {
    if (carouselRef.current) carouselRef.current.goTo(activeTab);
  }, [activeTab, carouselRef]);

  return (
    <Container>
      <StyledCarousel
        ref={carouselRef}
        afterChange={setActiveTab}
        waitForAnimate
        swipe={false}
        infinite={false}
      >
        {contentArray.map(({ content, id }) => (
          <OptionContainer key={id}>
            <Option>{content}</Option>
          </OptionContainer>
        ))}
      </StyledCarousel>
    </Container>
  );
};
