import styled from 'styled-components';
import { Col, Table } from 'react-bootstrap';

export const Column = styled(Col)`
  background-color: #fff;
  padding-top: 60px;
  padding-bottom: 15px;
`;

export const TableStyled = styled(Table)`
  @media screen and (max-width: 450px) {
    td,
    th {
      padding: 0.5rem;
    }
  }
  @media screen and (max-width: 330px) {
    td,
    th {
      padding: 0.2rem;
    }
  }
`;

export const DeviceUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0.5em 1em;
    color: #000;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    i {
      margin-left: 5px;
    }
  }
`;

export const ModelUl = styled.ul`
  display: grid;
  width: 100%;
  text-align: center;
  grid-template-columns: ${(props) =>
    props.gridColumn && `repeat(${props.gridColumn}, 1fr)`};
  padding: 0;
  grid-gap: 15px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5em 1em;
    background: #111;
    color: #fff;
    cursor: pointer;
    list-style: none;
    border-radius: 25px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
    &.active {
      background-color: #5f5f5f;
      transform: scale(1.05);
    }
  }
`;

export const CatalogSection = styled.section`
  width: 100%;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;

  .swiper-slide {
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4d4d4d;
  }

  * {
    color: #000;
  }

  h2 {
    line-height: 1;
    letter-spacing: 0;
    text-align: center;
    font-weight: 800;
    margin-bottom: 1em;
  }
  span {
    font-size: 1rem;
    text-align: center;
    text-transform: none;
    font-weight: 400;
  }
`;
