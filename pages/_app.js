import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';
import bootstrap from '../bootstrap.min.css';

import swiperSCSS from 'swiper/swiper.min.css';
import navigaionSCSS from 'swiper/components/navigation/navigation.min.css';
import paginationSCSS from 'swiper/components/pagination/pagination.min.css';
import scrollBarSCSS from 'swiper/components/scrollbar/scrollbar.min.css';
import SiteProvider from '../context/site.context';

const GlobalStyle = createGlobalStyle`
  ${bootstrap}
  ${swiperSCSS}
  ${navigaionSCSS}
  ${paginationSCSS}
  ${scrollBarSCSS}
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

`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link href='/fonts/Graphik-LCG/stylesheet.css' rel='stylesheet' />
        <link href='/fonts/SFProDisplay/stylesheet.css' rel='stylesheet' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
          integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
          crossorigin='anonymous'
        />
      </Head>
      <SiteProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </SiteProvider>
    </>
  );
}
