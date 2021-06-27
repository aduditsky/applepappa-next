import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';
import bootstrap from '../bootstrap.min.css';
import Marquee from 'react-fast-marquee';
import { Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import dataLinks from '../components/Navbar/linksData';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '../lib/ga';

import swiperSCSS from 'swiper/swiper.min.css';
import navigaionSCSS from 'swiper/components/navigation/navigation.min.css';
import paginationSCSS from 'swiper/components/pagination/pagination.min.css';
import scrollBarSCSS from 'swiper/components/scrollbar/scrollbar.min.css';
import SiteProvider from '../context/site.context';
import Head from 'next/head';
import { useMediaQuery } from '../lib/useMediaQuery';

const GlobalStyle = createGlobalStyle`
  ${bootstrap}
  ${swiperSCSS}
  ${navigaionSCSS}
  ${paginationSCSS}
  ${scrollBarSCSS}

  :root{
    --bg: #242526;
    --bg-accent: #484a4d;
    --text-color: #000;
    --nav-size: 60px;
    --border: 1px solid #0e0e0e;
    --border-radius: 5px;
    --speed: 500ms;
  }

  .marquee {
    min-height: 50px;
    background-color: #000;
  }

  .marquee * {
    color: #fff;
    font-size: 1.3em;
  }

  .menu-item {
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    /* transition: background var(--speed); */
    padding: 0.5rem;
  }

  .menu-item .icon-button {
    margin-right: 0.5rem;
  }


  .menu-item .icon-button:hover {
    filter: none;
  }

  .menu-item:hover {
    background-color: #525357;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--text-color);
    text-decoration: none;;
  }

  html{
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: "SF Pro Display", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0;
    font-weight: 400;
    background-color: #f5f5f7;
  }

  .modal-content{
    border-radius: 25px;
    overflow: hidden;
  }
  .modal-body{
    padding: 1.3rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .dgqwd3{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 80%;
    max-width: 450px;
    height: 100vh;
    z-index: 100500;
  }


  /* CSSTransition classes  */
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
  }


  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-secondary-exit {

  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all var(--speed) ease;
  }

`;

const SectionHead = styled.div`
  background-color: #000;
  * {
    color: #fff;
  }
  h4 {
    text-align: left;
    font-weight: 800;
    width: 100%;
    padding: 5px;
    margin: 0;
    font-size: 1em;
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  a {
    text-decoration: underline;
  }
`;

const HeaderLink = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
  cursor: pointer;
  padding: 0.5em 0.98em;
  font-weight: 700;
  &:hover {
    color: #aaa;
  }
`;

const Content = styled.div`
  min-height: calc(100vh - 78px - 106px - 15px);
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

// ReactGA.initialize('G-10048GKZZ6');
// console.log(ReactGA);
//

export default function App({ Component, pageProps }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name='yandex-verification' content='4f09deb238ba6960' />
        <link href='/fonts/Graphik-LCG/stylesheet.css' rel='stylesheet' />
        <link href='/fonts/SFProDisplay/stylesheet.css' rel='stylesheet' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
          integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
          crossOrigin='anonymous'
        />
        <link rel='icon' href='%PUBLIC_URL%/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
          integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
          crossOrigin='anonymous'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#424242' />
        <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='%PUBLIC_URL%/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='%PUBLIC_URL%/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='%PUBLIC_URL%/favicon-16x16.png'
        />
        <link
          rel='mask-icon'
          href='%PUBLIC_URL%/safari-pinned-tab.svg'
          color='#303030'
        />
        <link rel='apple-touch-icon' href='%PUBLIC_URL%/logo192.png' />
      </Head>

      <SiteProvider>
        <ThemeProvider theme={theme}>
          <Marquee
            className='marquee'
            gradient={false}
            speed={50}
            // pauseOnHover
            direction='left'
          >
            Ремонт в день обращения, выезд специалиста, запчасти в наличии, если
            ремонт больше 5 дней — подменный IPhone бесплатно.
          </Marquee>
          <Header />
          {!isMobile ? (
            <SectionHead>
              <Container>
                <Row>
                  <h4>Каталог:</h4>
                </Row>
                <Row>
                  <HeaderLinks>
                    {dataLinks.map((link) => (
                      <Link
                        key={`desc-${link.name}`}
                        href={`/${link.slug}`}
                        passHref
                      >
                        <HeaderLink>{link.name}</HeaderLink>
                      </Link>
                    ))}
                  </HeaderLinks>
                </Row>
              </Container>
            </SectionHead>
          ) : null}
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer />
        </ThemeProvider>
      </SiteProvider>
    </>
  );
}
