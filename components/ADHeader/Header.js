import Link from 'next/link';
import React, { useEffect } from 'react';
import Scramble from 'react-scramble';
import styled from 'styled-components';
import { useMediaQuery } from '../../lib/useMediaQuery';
import dynamic from 'next/dynamic';
const NavMoblie = dynamic(() => import('./NavMoblie'), {
  ssr: false,
});
const Nav = dynamic(() => import('./Nav'), {
  ssr: false,
});

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100000;
  width: 100vw;
  top: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  backdrop-filter: saturate(150%) blur(15px);
  * {
    color: #f1f1f3;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 88%;
  padding: 3px 0;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1;
  }
  @media screen and (max-width: 540px) {
  }
`;

const LogoLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  span {
    font-size: 1.3em;
  }
`;

const Header = () => {
  const Mobile = useMediaQuery('(max-width: 540px)');
  const Tablet = useMediaQuery('(min-width: 540px)');

  return (
    <HeaderStyles>
      <Container>
        <Link href='/'>
          <LogoLink>
            <Scramble
              mouseEnterTrigger={`start`}
              mouseLeaveTrigger={'reset'}
              text={`Duditsky`}
              speed={'slow'}
              steps={[
                {
                  roll: 9,
                  action: '+',
                  type: 'random',
                },
                {
                  action: '-',
                  type: 'random',
                },
              ]}
            />
            <Scramble
              mouseEnterTrigger={`start`}
              mouseLeaveTrigger={'reset'}
              text={`design`}
              speed={'slow'}
              steps={[
                {
                  roll: 9,
                  action: '+',
                  type: 'random',
                },
                {
                  action: '-',
                  type: 'random',
                },
              ]}
            />
          </LogoLink>
        </Link>
        {Mobile && <NavMoblie />}
        {Tablet && !Mobile && <Nav />}
      </Container>
    </HeaderStyles>
  );
};

export default Header;
