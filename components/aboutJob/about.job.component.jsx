import React, { useContext, useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { SiteContext } from '../../context/site.context';

import {
  AboutJobSection,
  Column,
  Diagram,
  Cell,
  CellCol,
} from './about.job.styles';

const AboutJob = () => {
  const { refAbout } = useContext(SiteContext);

  //   const [windowWidth, setWindowWidth] = useState(
  //     document.documentElement.clientWidth
  //   );

  //   window.addEventListener('resize', () => {
  //     setWindowWidth(document.documentElement.clientWidth);
  //   });

  const [gridSize, setGridSize] = useState(5);

  //   useEffect(() => {
  //     windowWidth < 520 ? setGridSize(1) : setGridSize(5);
  //   }, [windowWidth]);

  //ref={refAbout}

  return (
    <AboutJobSection>
      <Container>
        <Row>
          <Column>
            <h2>Как мы работаем</h2>

            <Diagram gridSize={gridSize}>
              <Cell>
                <i className='fas fa-phone-alt'></i>
                <p>Телефон</p>
              </Cell>
              <Cell>
                <i className='fas fa-coffee'></i>
                <p>Встреча</p>
              </Cell>
              <CellCol>
                <Cell>
                  <i className='far fa-chart-bar'></i>
                  <p>Диагностика</p>
                </Cell>
                <i
                  className='fas fa-sync-alt'
                  style={{ marginBottom: '15px' }}
                ></i>
                <Cell>
                  <i className='fas fa-mobile'></i>
                  <p>Забираем устройство, выдаем подменный iPhone 5S</p>
                </Cell>
              </CellCol>
              <Cell>
                <i className='fas fa-toolbox'></i>
                <p>Ремонт</p>
              </Cell>
              <Cell>
                <i className='far fa-credit-card'></i>
                <p>Оплата, выдача квитанции и гарантия до 1 года</p>
              </Cell>
            </Diagram>
          </Column>
        </Row>
      </Container>
    </AboutJobSection>
  );
};

export default AboutJob;
