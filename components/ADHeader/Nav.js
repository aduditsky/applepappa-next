import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    li {
      padding: 0.3rem;
      margin: 0.71rem;
    }
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link href='/works'>Работы</Link>
        </li>
        <li>
          <Link href='/prices'>Цены</Link>
        </li>
        <li>
          <Link href='/about'>О нас</Link>
        </li>
        <li>
          <Link href='/contacts'>Контакты</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
