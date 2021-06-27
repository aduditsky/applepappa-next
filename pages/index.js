import Main from '../components/mainsection/mainsection.component';
import SliderInfo from '../components/slider.one/slider.info.component';
import TradeIn from '../components/tradein/tradein.component';
import AboutJob from '../components/aboutJob/about.job.component';
import CallBack from '../components/callback/callback.component';
import ModalInfo from '../components/modal/modal.component';
import CategoryComponent from '../components/fetch/fetch.component';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Head from 'next/head';
import { useContext } from 'react';
import { SiteContext } from '../context/site.context';

const ModelsLinks = styled.a`
  padding: 0.5em 0.92em;
  border: 1px solid #000;
  margin: 0 5px;
  cursor: pointer;
`;

export default function Home({ service }) {
  const { counter } = useContext(SiteContext);
  const { categories, models } = service;

  const filteredCat = categories.map((category) =>
    Object.create({ name: category.name, slug: category.slug })
  );

  return (
    <>
      <Head>
        <title>
          ApplePappa.ru - Выездной ремонт Apple в Красноярске | iPhone, iPad,
          Macbook
        </title>
        <meta
          name='description'
          content='Выездной ремонт телефонов и техники Apple в Красноярске. Устройство iPhone, iPad, Macbook, AppleWatch, можем приехать куда угодно, когда удобно. Услуги разной сложности.'
        />
        <meta
          name='keywords'
          content='ремонт айфон Красноярск выездной макбук айпад телефон починить устройство продать Apple iPhone iPad Macbook andorid андроид эпл эппл'
        />
      </Head>
      <Main />
      <SliderInfo />
      {counter > 15 && (
        <div
          style={{
            display: 'flex',
            marginTop: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ margin: 'auto', maxWidth: '350px', height: 'auto' }}
            src={'/images/tenor.gif'}
            alt='secret'
          />
        </div>
      )}
      <CategoryComponent categories={categories} models={models} />
      <TradeIn />
      <AboutJob />
      <CallBack />
      <ModalInfo />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://applepappadb.herokuapp.com/categories`);
  const modelsRes = await fetch(`http://applepappadb.herokuapp.com/models`);

  const categories = await res.json();
  const models = await modelsRes.json();

  const service = Object.assign({ categories, models });

  return {
    props: { service },
  };
}
