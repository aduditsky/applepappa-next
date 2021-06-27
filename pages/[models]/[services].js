import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { TableStyled } from '../../components/catalog/catalog.styles';
import styled from 'styled-components';
import Head from 'next/head';
import AboutJob from '../../components/aboutJob/about.job.component';
import CallBack from '../../components/callback/callback.component';
import ModalInfo from '../../components/modal/modal.component';
import { SiteContext } from '../../context/site.context';
import { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from '../../lib/useMediaQuery';
import { Phone } from '../../components/footer/footer.styles';

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

const Header = styled.h1`
  font-weight: 800;
  margin-top: 35px;
  margin-bottom: 40px;
  margin-left: 30px;
`;

const ServicePage = ({ service }) => {
  const { setModalInfo } = useContext(SiteContext);
  const [grid, setGrid] = useState(true);

  const Mobile = useMediaQuery('(max-width: 540px)');

  useEffect(() => {
    if (Mobile) {
      setGrid(false);
    }
    if (!Mobile) {
      setGrid(true);
    }
  }, [Mobile]);

  return (
    <>
      <Head>
        <title>
          Ремонт {service.name} в Красноярске | ApplePappa.ru - Выездной ремонт
          Apple
        </title>
      </Head>
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
          </Link>
          \
          <Link href={`/${service.modelSlug}`} passHref>
            <a>{service.modelName}</a>
          </Link>
          \<p>{service.name}</p>
        </Breadrumbs>

        <Row>
          <Col>
            <Header>{service.name}</Header>
            <TableStyled bordered hover>
              <thead>
                <tr>
                  <th style={{ width: '60%' }}>Услуга</th>
                  {grid && <th>Время ремонта</th>}
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                {service.services.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    {grid && <td>{item.time}</td>}
                    <td>
                      {item.price === 'Бесплатно*'
                        ? 'Бесплатно*'
                        : item.price === 'бесплатно'
                        ? 'Бесплатно*'
                        : item.price === 'Уточните'
                        ? `Уточните`
                        : `${item.price.toLocaleString('ru')} руб.`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableStyled>
            <p className='text-left' style={{ fontSize: '10px' }}>
              * - при условии, что ремонт вы производите у нас
            </p>
            <p
              className='text-center'
              style={{ fontSize: '20px', color: '#000' }}
            >
              <b>
                Остались вопросы? <br /> Вы можете нам позвонить по номеру ниже!
              </b>{' '}
              <br />
              <Phone
                href='tel:+79082122240'
                style={{ color: '#000' }}
                onClick={() => {
                  // ReactGA.event({
                  //   category: 'Подвал',
                  //   action: 'Телефон',
                  // });
                }}
              >
                <i className='fas fa-phone-alt'></i> +7 (908) 212-22-40
              </Phone>
            </p>
          </Col>
        </Row>
      </Container>
      <AboutJob />
      <CallBack />
      <ModalInfo />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://applepappadb.herokuapp.com/categories`);
  const categories = await res.json();

  const paths = await categories
    .map((model) =>
      model.models.map((service) => ({
        params: {
          models: model.slug,
          services: service.slug,
        },
      }))
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://applepappadb.herokuapp.com/models?slug=${params.services}`
  );
  const resModel = await fetch(
    `http://applepappadb.herokuapp.com/categories?slug=${params.models}`
  );
  const data = await res.json();
  const model = await resModel.json();

  const service = Object.assign(data[0], {
    modelName: model[0].name,
    modelSlug: model[0].slug,
  });

  return {
    props: { service },
  };
}

export default ServicePage;
