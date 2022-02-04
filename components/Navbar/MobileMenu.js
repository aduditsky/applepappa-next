import Link from 'next/link';
import { useContext } from 'react';
import styled from 'styled-components';
import { SiteContext } from '../../context/site.context';
import dataLinks from './linksData';
// import { SocialLinks, Teg, SocialLink } from '../tradein/tradein.styles';
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

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SocialLink = styled.a`
  outline: none;
  color: #ffffff;
  text-decoration: none !important;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  padding: 2px;
  margin-right: 10px;

  border-radius: 20%/20%;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
  }
  &:before {
    border-radius: 2%/30%;
    top: 33px;
    bottom: 33px;
    right: -2px;
    left: -2px;
  }
  &:after {
    border-radius: 30%/2%;
    left: 33px;
    right: 33px;
    top: -2px;
    bottom: -2px;
  }
  &:last-child {
    margin-right: 0;
  }
  img {
    width: auto;
    height: 87.5%;
  }
  ${({ telegram }) =>
    telegram &&
    `   
        img{
          margin: 0 5.8%;
        }

    `}
  ${({ phone }) =>
    phone &&
    `
        background-color: #51ee6d;  
        img{
            margin: 0 5.8%;
            fill: #fff;
            width:75%;
            height:75%;
        }

    `}
    ${({ whatsapp }) =>
    whatsapp &&
    `
        background-color: rgb(67, 216, 84); 
        img{
          margin: 0 5.8%;
        }
    `}
    ${({ instagram }) =>
    instagram &&
    `
        background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%); 
        img{
          margin: 0 5.8%;
        }
    `}
    ${({ vk }) =>
    vk &&
    `
        background: #2787F5;
        
            color: #fff;
            // font-size: 30px;
            text-decoration: none;

        }
        img{
          margin: 0 5.8%;
        }
        @media screen and (max-width: 540px) {
          i{font-size: 28px;}
        }
        @media screen and (max-width: 375px) {
          i{font-size: 26.5px;}
        }
        @media screen and (max-width: 320px) {
          i{font-size: 20px;}
        }
    `}
  
  @media screen and (max-width: 540px) {
    width: 45px;
    height: 45px;
  }
  @media screen and (max-width: 375px) {
    width: 38px;
    height: 38px;
  }
  @media screen and (max-width: 320px) {
    width: 32px;
    height: 32px;
  }
`;

const Teg = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 136, 204);
  border-radius: 50%;
  padding: 3px;
  /* img {
    height: 24px;
  } */
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
