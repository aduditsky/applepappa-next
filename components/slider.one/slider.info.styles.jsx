import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const SliderInfoSection = styled.section`
  width: 100%;
  min-height: 20vh;
  padding: 15px 0;
  background: #111;
  overflow: unset;

  display: flex;
  justify-content: center;
  align-items: center;
  * {
    color: #fff;
  }

  .swiper-pagination {
    width: unset;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.2em 0.5em;
    border-radius: 12.8px !important;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
  }

  .swiper-pagination-bullet {
    background: #111;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
`;

export const Description = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  justify-content: center;
  width: 100%;
  h2 {
    font-size: 2em;
    font-weight: 800;
    padding: 0.4em;
    position: absolute;
    /* top: 50%; */
    bottom: 15%;
    left: 50%;
    max-width: 100%;
    margin: 0;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    backdrop-filter: saturate(150%) blur(15px);
  }
  p,
  span {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.5em;
    }
  }
  @media screen and (max-width: 450px) {
    h2 {
      font-size: 1.2em !important;
    }
  }
  @media screen and (max-width: 320px) {
    h2 {
      font-size: 1em !important;
    }
  }
`;
