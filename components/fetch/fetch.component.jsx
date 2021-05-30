import { useQuery } from '@apollo/client/react';
import gql from 'graphql-tag';
import React, { useState, useEffect } from 'react';
import {
  CatalogSection,
  DeviceUl,
  ModelUl,
  Column,
  TableStyled,
} from '../catalog/catalog.styles';
import { Container, Row } from 'react-bootstrap';
import { Phone } from '../footer/footer.styles';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

const CategoryTable = ({ categories }) => {
  const [show, setShow] = useState(true);
  const [models, setModels] = useState([]);
  const [services, setServices] = useState([]);

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activeModel, setActiveModel] = useState(categories[0].models[0].id);

  useEffect(() => {
    setModels(
      categories?.filter((category) => category.id === activeCategory)[0].models
    );
    setServices(
      categories
        ?.filter((category) => category.id === activeCategory)[0]
        .models?.filter((model) => model.id === activeModel)[0]?.services
    );
  }, [activeModel, activeCategory, categories]);

  //   Проверка на размерность экрана

  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );

  window.addEventListener('resize', () => {
    setWindowWidth(document.documentElement.clientWidth);
  });

  const [gridSize, setGridSize] = useState(2);

  useEffect(() => {
    windowWidth >= 768 ? setShow(true) : setShow(false);
    windowWidth < 380
      ? setGridSize(2)
      : windowWidth < 600
      ? setGridSize(3)
      : windowWidth < 768
      ? setGridSize(4)
      : windowWidth < 980
      ? setGridSize(5)
      : setGridSize(6);
  }, [windowWidth]);

  //   Конец проверки

  return (
    <CatalogSection>
      <Container>
        <Row>
          <Column>
            <p>Навигация по сайту</p>
            <ModelUl gridColumn={gridSize}>
              {categories.map((category) => (
                <Link key={category.id} to={`/${category.slug}`}>
                  <li>{category.name}</li>
                </Link>
              ))}
            </ModelUl>
          </Column>
        </Row>
        <Row>
          <Column>
            <h2>
              Выберите ваше устройство
              <br />
              <span>
                После ремонта мастер проведет полную проверку <br />
                устройства и выдаст гарантию на ремонт 100 дней
              </span>
            </h2>
            <DeviceUl>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={activeCategory === category.id ? 'acitve' : null}
                  onClick={() => {
                    activeCategory !== category.id &&
                      setActiveCategory(category.id);
                    activeCategory !== category.id &&
                      setActiveModel(category.models[0].id);
                  }}
                >
                  {category.name}{' '}
                  {activeCategory === category.id ? (
                    <i className='fas fa-check-square'></i>
                  ) : (
                    <i className='far fa-check-square'></i>
                  )}
                </li>
              ))}
            </DeviceUl>
            <ModelUl gridColumn={gridSize}>
              {models &&
                models.map((model) => (
                  <li
                    key={model.id}
                    className={activeModel === model.id ? 'active' : null}
                    onClick={() => {
                      setActiveModel(model.id);
                    }}
                  >
                    {model.name}
                  </li>
                ))}
            </ModelUl>
            <p className='text-center' style={{ fontSize: '20px' }}>
              <b>
                Не нашли свое устройство? <br /> Уточните по телефону
              </b>
              <br />
              <Phone
                href='tel:+79082122240'
                style={{ color: '#000' }}
                onClick={() => {
                  ReactGA.event({
                    category: 'Подвал',
                    action: 'Телефон',
                  });
                }}
              >
                <i className='fas fa-phone-alt'></i> +7 (908) 212-22-40
              </Phone>
            </p>
            <TableStyled bordered hover>
              <thead>
                <tr>
                  <th>Услуга</th>
                  {show && <th>Устройство</th>}
                  {show && <th>Время ремонта</th>}
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                {services &&
                  services.map((service) => (
                    <tr key={service.id}>
                      <td>{service.name}</td>
                      {show && (
                        <td>
                          {
                            models.filter(
                              (model) => model.id === activeModel
                            )[0]?.name
                          }
                        </td>
                      )}
                      {show && <td>{service.time}</td>}
                      <td>
                        {service.price
                          ? `${parseInt(service.price).toLocaleString(
                              'ru'
                            )} руб.`
                          : 'Уточните'}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </TableStyled>
            <p className='text-left' style={{ fontSize: '10px' }}>
              * - при условии, что ремонт вы производите у нас
            </p>
          </Column>
        </Row>
      </Container>
    </CatalogSection>
  );
};

const CategoryComponent = () => {
  const { loading, error, data } = useQuery(gql`
    query {
      categories {
        id
        name
        slug
        models {
          id
          name
          services {
            id
            t_id
            name
            price
            time
          }
        }
      }
    }
  `);

  if (loading) return 'Собираем...';
  if (error) return `Ошибка! ${error.message}`;

  return <CategoryTable categories={data.categories} />;
};

export default CategoryComponent;
