import { styled } from "styled-components";
import { Carousel } from "antd";

export const Container = styled.div`
  flex-grow: 1;

  .ant-carousel,
  .slick-list,
  .slick-initialized,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }
`;

export const StyledCarousel = styled(Carousel)`
  .slick-dots {
    display: none !important;
  }
`;

export const Option = styled.div`
  max-height: calc(100vh - 14rem);
  padding: 1.8rem;
  overflow-y: scroll;
`;

export const OptionContainer = styled.div`
  height: 100%;
`;
