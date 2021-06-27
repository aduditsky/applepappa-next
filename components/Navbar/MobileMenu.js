import Link from 'next/link';
import { useContext } from 'react';
import styled from 'styled-components';
import { SiteContext } from '../../context/site.context';
import dataLinks from './linksData';
import { SocialLinks, Teg, SocialLink } from '../tradein/tradein.styles';
import { Phone } from '../modal/modal.styles';

const NavModalStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 35px;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #141414 26%);
  /* backdrop-filter: blur(15px) saturate(180%); */
  * {
    color: #eee;
    &:hover {
      color: #fff;
    }
  }
  @media screen and (max-width: 320px) {
    padding: 20px;
  }
`;

const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: min-content;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    li {
      padding: 0.45rem 0;
      margin: 0.45rem 0;
      a {
        font-size: 2em;
        font-weight: 800;
        text-transform: none;
      }
    }
  }
`;

const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  border: none;
  background: none;
  .fa-times {
    font-size: 2.2em;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  div {
    width: 100%;
    display: flex;
  }
  .direct-contact {
    flex-direction: column;
    margin-bottom: 50px;
    align-items: flex-start;
    span {
      padding: 0.2em 0;
      font-size: 1.7em;
      font-weight: 600;
    }
  }
  .social-links {
    i {
      font-size: 2.2em;
      padding-right: 0.5em;
      &:last-child {
        padding-right: 0;
      }
    }
  }
`;

const Tel = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: right;
  margin: 10px 0;
  * {
    color: #fff;
    &:hover {
      color: #bbb;
    }
  }
  span {
    font-size: 1.8em;
    font-weight: 700;
    text-transform: unset;
    text-align: left;
  }
  a {
    text-decoration: none;
    font-size: 1.8em;
    letter-spacing: -0.03em;
    font-weight: 900;
    @media screen and (max-width: 380px) {
      font-size: 12px;
    }
  }
`;

const Links = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  margin-bottom: 15px;
  span {
    font-size: 1.4em;
  }
`;

const MobileMenu = ({ close }) => {
  // const { categoriesList } = useContext(SiteContext);

  return (
    <NavModalStyles>
      <Close onClick={close}>
        <i className='fas fa-times'></i>
      </Close>
      <NavStyles>
        <ul>
          {dataLinks.map((category) => (
            <li key={`head-${category.name}`}>
              <Link href={`/${category.slug}`} passHref>
                <a onClick={close}>{category.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </NavStyles>
      <Social>
        <Tel>
          <span>
            <i className='fas fa-map-marker-alt'></i> пр Мира 96, <br /> магазин
            Маска
          </span>
          <a href='tel:+79082122240'>+7 (908) 212-22-40</a>
        </Tel>
        <Links>
          <span>
            ПН-ВС: 11:00-20:00
            <br />
            Без выходных
          </span>
        </Links>
        <Phone>
          <SocialLinks>
            <SocialLink
              phone
              href='tel:+79082122240'
              onClick={() => {
                ReactGA.event({
                  category: 'Модальное окно',
                  action: 'Телефон',
                });
              }}
            >
              <img src='/icons/phone.png' alt='Phone' />
            </SocialLink>
            <SocialLink
              telegram
              href='tg://resolve?domain=ApplePappa'
              onClick={() => {
                ReactGA.event({
                  category: 'Модальное окно',
                  action: 'Телеграм',
                });
              }}
            >
              <Teg>
                <img src='/icons/telegram.svg' height='32' alt='Telegram' />
              </Teg>
            </SocialLink>
            <SocialLink
              whatsapp
              href='https://wa.me/+79082122240?text=Привет!'
              onClick={() => {
                ReactGA.event({
                  category: 'Модальное окно',
                  action: 'WhatsApp',
                });
              }}
            >
              <img src='/icons/whatsapp.svg' alt='WhatsApp' />
            </SocialLink>
            <SocialLink
              instagram
              href='https://www.instagram.com/applepappa.ru/'
              onClick={() => {
                ReactGA.event({
                  category: 'Модальное окно',
                  action: 'Instagram',
                });
              }}
            >
              <img src='/icons/instagram.svg' alt='Instagram' />
            </SocialLink>
            <SocialLink
              vk
              href='https://vk.com/applepappa'
              onClick={() => {
                ReactGA.event({
                  category: 'Модальное окно',
                  action: 'VK',
                });
              }}
            >
              <i className='fab fa-vk'></i>
            </SocialLink>
          </SocialLinks>
        </Phone>
      </Social>
    </NavModalStyles>
  );
};

export default MobileMenu;
