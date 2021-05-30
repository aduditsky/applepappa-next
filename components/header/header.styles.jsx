import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

export const HeaderStyled = styled(Navbar)`
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.08);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
`;

export const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;

export const HeadLogo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  img {
    width: auto;
    height: 50px;
  }
`;

export const Tel = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  * {
    color: #55595c;
  }
  span {
    font-size: 12px;
    font-weight: 500;
    text-transform: unset;
  }
  a {
    text-decoration: none;
    font-size: 14px;
    letter-spacing: -0.03em;
    font-weight: 500;
    @media screen and (max-width: 380px) {
      font-size: 12px;
    }
  }
`;

export const Links = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
