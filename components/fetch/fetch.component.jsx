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
import { useMediaQuery } from '../../lib/useMediaQuery';

const CategoryComponent = ({ categories, models }) => {
  const [show, setShow] = useState(true);

  const [modelList, setModelList] = useState([]);
  const [serviceList, setServiceList] = useState([]);

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activeModel, setActiveModel] = useState(categories[0].models[0].id);

  useEffect(() => {
    setModelList(
      categories?.filter((category) => category.id === activeCategory)[0].models
    );
    setServiceList(
      models.filter((model) => model.id === activeModel)[0]?.services
    );
  }, [activeModel, activeCategory]);

  const [gridSize, setGridSize] = useState(4);

  const Mobile = useMediaQuery('(max-width: 540px)');
  const Tablet = useMediaQuery('(max-width: 768px)');
  const Laptop = useMediaQuery('(max-width: 992px)');
  const Desktop = useMediaQuery('(min-width: 993px)');

  useEffect(() => {
    if (Mobile) {
      setGridSize(2);
      setShow(false);
    }
    if (!Mobile && Tablet) {
      setGridSize(3);
      setShow(true);
    }
    if (!Mobile && !Tablet && Laptop) {
      setGridSize(4);
      setShow(true);
    }
    if (!Mobile && !Tablet && !Laptop && Desktop) {
      setGridSize(6);
      setShow(true);
    }
  }, [Mobile, Tablet, Laptop]);

  return (
    <CatalogSection>
      <Container>
        <Row>
          <Column>
            <h2>
              Выберите ваше устройство
              <br />
              <span>
                После ремонта мастер проведет полную проверку устройства и
                выдаст гарантию на ремонт 100 дней
              </span>
            </h2>
            <DeviceUl>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={activeCategory === category.id ? 'active' : null}
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
              {modelList &&
                modelList.map((model) => (
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
            <p
              className='text-center'
              style={{ fontSize: '20px', margin: '15px 0' }}
            >
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
                {serviceList &&
                  serviceList.map((service) => (
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
                        {service.price === 'Бесплатно*'
                          ? 'Бесплатно*'
                          : service.price === 'бесплатно'
                          ? 'Бесплатно*'
                          : service.price === 'Уточните'
                          ? `Уточните`
                          : `${service.price.toLocaleString('ru')} руб.`}
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

export default CategoryComponent;
