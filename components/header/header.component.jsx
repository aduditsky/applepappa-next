import Link from 'next/link';
// import { SiteContext } from '../../context/site.context';

import { HeaderStyled, HeadLogo, Links, Tel } from './header.styles';
import { Container } from 'react-bootstrap';

const Header = () => {
  // const {refAbout} = useContext(SiteContext)
  // const ScrollAboutHandler = () => refAbout.current.scrollIntoView()

  return (
    <HeaderStyled sticky='top'>
      <Container>
        <Links>
          <span>
            ПН-ВС: 11:00-20:00
            <br />
            Без выходных
          </span>
          {/* <span onClick={ScrollAboutHandler}>Контакты</span> */}
        </Links>

        <HeadLogo>
          <Link href='/'>
            <a>
              <img src={'/images/logo-black.png'} alt={`Apple Pappa`} />
            </a>
          </Link>
        </HeadLogo>

        <Tel>
          <span>
            <i className='fas fa-map-marker-alt'></i> пр Мира 96, магазин Маска
          </span>
          <a href='tel:+79082122240'>+7 (908) 212-22-40</a>
        </Tel>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
