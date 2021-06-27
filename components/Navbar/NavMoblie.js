import { useState } from 'react';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import { animated, Transition } from 'react-spring';
import Link from 'next/link';

const ButtonMenu = styled.button`
  color: #000;
  background: none;
  border: none;
  padding: 0;
  font-size: 1.85em;
`;

function NavMoblie() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ButtonMenu
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <i className='fas fa-bars'></i>
      </ButtonMenu>
      <Transition
        items={isOpen}
        from={{ right: '-80%' }}
        enter={{ right: '0%' }}
        leave={{ right: '-80%' }}
      >
        {(styles, item) =>
          item && (
            <animated.div style={styles} className='dgqwd3'>
              <MobileMenu
                style={styles}
                close={() => {
                  setOpen(false);
                }}
              />
            </animated.div>
          )
        }
      </Transition>
    </>
  );
}

export default NavMoblie;
