import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const CallBackSection = styled.section`
  width: 100%;
  min-height: 33vh;
  margin: 15px 0;

  background-color: #f5f5f7;
  color: #515154;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
`;

// const width = document.documentElement.clientWidth;
// const height = width * (4 / 3);

export const MapOuter = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.08);
  position: relative;
  text-align: right;
  height: 100%;
  width: 100%;
  min-height: 500px;
  max-height: 500px;
  max-width: 600px;
  border-radius: 25px;
  overflow: hidden;
`;

export const GMapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
`;
