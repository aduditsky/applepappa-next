import Link from 'next/link';
// import { SiteContext } from '../../context/site.context';

import { HeaderStyled, HeadLogo, Links, Tel } from './header.styles';
import { Container } from 'react-bootstrap';

import NavMoblie from '../Navbar/NavMoblie';
import { useMediaQuery } from '../../lib/useMediaQuery';

const Header = () => {
  // const {refAbout} = useContext(SiteContext)
  // const ScrollAboutHandler = () => refAbout.current.scrollIntoView()

  const isMobile = useMediaQuery('(max-width: 768px)');

  return !isMobile ? (
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
          <Link href='/' passHref>
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
  ) : (
    <HeaderStyled sticky='top' style={{ minHeight: 60 }}>
      <Container style={{ justifyContent: 'flex-end', position: 'relative' }}>
        <HeadLogo
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -30px)',
          }}
        >
          <Link href='/' passHref>
            <a>
              <img src={'/images/logo-black.png'} alt={`Apple Pappa`} />
            </a>
          </Link>
        </HeadLogo>

        <NavMoblie />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
