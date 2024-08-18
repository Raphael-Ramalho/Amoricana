import { styled } from "styled-components";
import { Carousel } from "antd";

export const Container = styled.div`
  flex-grow: 1;

  .ant-carousel {
    height: 100%;
  }
`;

export const StyledCarousel = styled(Carousel)`
  .ant-carousel {
    height: 100%;
  }
  .slick-dots {
    display: none !important;
  }
`;

export const Option = styled.div`
  height: 100%;
  padding: 1.4rem;
`;
