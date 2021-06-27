import Link from 'next/link';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';
import AboutJob from '../../components/aboutJob/about.job.component';
import CallBack from '../../components/callback/callback.component';
import ModalInfo from '../../components/modal/modal.component';
import { useContext, useEffect, useState } from 'react';
import { SiteContext } from '../../context/site.context';
import ReactGA from 'react-ga';
import { useMediaQuery } from '../../lib/useMediaQuery';

const Breadrumbs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  * {
    padding: 0 4px;
    margin: 0;
  }
  img {
    height: 12px;
    width: auto;
  }
`;

const HeaderImage = styled.section`
  width: 100%;
  height: 550px;
  background: #333;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  ${(props) =>
    props.bg && `background-image: url('/models-image/${props.bg}.jpg');`}
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
  h4 {
    z-index: 2;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 800;
    font-size: 1.4em;
    margin: 0;
    text-transform: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  color: #000;
  p {
    margin: 0;
    font-size: 1.46em;
    font-weight: bold;
  }
`;

const NumberComponent = styled.div`
  width: 100%;
  padding: 75px;
  margin-top: 15px;
  background: #000;
  * {
    color: #fff;
  }
  h2 {
    font-size: 1.5em;
    font-weight: 800;
  }
  button {
    padding: 0.4em 0.97em;
    font-size: 1.2em;
    font-weight: 600;
    border: none;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.11);
    transition: 0.17s ease;
    margin-left: 1em;
    &:hover {
      transform: scale(1.03);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

const Header = styled.h1`
  font-weight: 800;
  margin-top: 0px;
  margin-bottom: 24px;
  margin-left: 30px;
`;

const GridHeader = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  margin: 0;
  margin-left: 25px;
  text-transform: none;
`;

const GridModels = styled.div`
  display: grid;
  grid-gap: 1em;
  padding: 40px;
  grid-template-columns: ${(props) => `repeat(${props.gridColumn}, 1fr)`};
  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

const ModelContainer = styled.a`
  cursor: pointer;
  display: flex;
  background-color: #fff;
  color: #131313;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 18px;
  justify-content: flex-start;
  align-items: center;
  padding: 4.5em 1em;
  overflow: hidden;
  box-shadow: 0px 6px 11px 1px rgba(34, 60, 80, 0.03);
  ${(props) => props.bg && `background-image: url('${props.bg}');`}
  background-position: right 12% bottom 150%;
  background-repeat: no-repeat;
  background-size: auto 140%;
  transition: 0.2s ease;

  ${(props) =>
    props.macbook &&
    `background-position: right 5% bottom 10%;
     background-size: 50% auto;`}

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 11px 0px rgba(8, 22, 34, 0.05);
  }

  h3 {
    text-transform: none;
    font-size: 1.3em;
    margin: 0;
    font-weight: 500;
  }
`;

const ModelPage = ({ model }) => {
  const { setModalInfo } = useContext(SiteContext);

  const Mobile = useMediaQuery('(max-width: 540px)');
  const Tablet = useMediaQuery('(max-width: 768px)');
  const Desktop = useMediaQuery('(max-width: 1024px)');

  const [gridSize, setGridSize] = useState(3);
  useEffect(() => {
    if (Mobile) {
      setGridSize(1);
    }
    if (Tablet && !Mobile) {
      setGridSize(2);
    }
    if (Desktop && !Tablet && !Mobile) {
      setGridSize(3);
    }
  }, [Mobile, Tablet]);

  const modelKeyWords = model.models
    .reduce((acc, ser) => {
      return acc + `, ` + ser.name;
    }, '')
    .substr(1);
  return (
    <>
      <Head>
        <title>
          Ремонт {model.name} в Красноярске | ApplePappa.ru - Выездной ремонт
          Apple
        </title>
        <meta
          name='description'
          content={`Выездной ремонт ${model.name} и техники Apple в Красноярске.  Модели:${modelKeyWords}`}
        />
        <meta
          name='keywords'
          content={`apple, ${model.name},${modelKeyWords}`}
        />
      </Head>

      <HeaderImage bg={model.slug}>
        <Content>
          <h4>Ремонт {model.name}</h4>
        </Content>
      </HeaderImage>

      <Container style={{ marginTop: 15, padding: 15, background: 'white' }}>
        <Breadrumbs>
          <Link href={`/`} passHref>
            <a>
              <img
                style={{ cursor: 'pointer' }}
                src={'/images/home.svg'}
                alt={'Иконка домой'}
              />
            </a>
          </Link>{' '}
          /<p>{model.name}</p>
        </Breadrumbs>
        <Row>
          <Col>
            <Header>Ремонт {model.name}</Header>
            {/* <p>Описание</p> */}
            <GridHeader>Список моделей </GridHeader>
            <GridModels gridColumn={gridSize}>
              {model.models.map((item) => (
                <Link
                  as={`/${model.slug}/${item.slug}`}
                  key={item.id}
                  href={`/[models]/[services]`}
                >
                  <ModelContainer
                    macbook={model.slug === 'macbook' && true}
                    bg={`/images/${model.slug}/${item.slug}.jpg`}
                  >
                    <h3>{item.name}</h3>
                  </ModelContainer>
                </Link>
              ))}
            </GridModels>
          </Col>
        </Row>
      </Container>

      <NumberComponent>
        <Row>
          <Col>
            <h2>Срочный ремонт? Выездной ремонт?</h2>
            <button
              onClick={() => {
                setModalInfo(true);
                ReactGA.event({
                  category: 'Модели',
                  action: `Отремонтировать ${model.name}`,
                });
              }}
            >
              Свяжитесь с нами!{' '}
              {/* <img src='/icons/repair.svg' height='14' alt='Отремонтировать' /> */}
            </button>
          </Col>
        </Row>
      </NumberComponent>
      <AboutJob />
      <CallBack />
      <ModalInfo />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://applepappadb.herokuapp.com/categories/`);
  const models = await res.json();

  const paths = await models.map((model) => ({
    params: { models: model.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://applepappadb.herokuapp.com/categories?slug=${params.models}`
  );
  const data = await res.json();
  const model = data[0];
  return {
    props: { model },
  };
}

export default ModelPage;
