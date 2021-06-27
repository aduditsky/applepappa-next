import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {
  CallBackSection,
  // GMapCanvas,
  MapOuter,
  About,
  Column,
} from './callback.styles';

const CallBack = () => {
  return (
    <CallBackSection>
      <Container>
        <Row>
          <Column xs={12} md={6}>
            <About>
              <h2>Записывайтесь на ремонт по телефону</h2>
              <p>
                <i className='fas fa-map-marker-alt'></i> г. Красноярск <b />
                Адрес: Проспект Мира, д. 96
              </p>
              {/* <a href='/'>Как добраться?</a> */}
              <p>
                График работы сервиса: <b />
                ПН-ВС 11:00 - 20:00 <b />
                Без выходных
              </p>
            </About>
          </Column>
          <Col xs={12} md={6}>
            <MapOuter>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.3969931917836!2d92.85920881587151!3d56.01179708062341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7afdc6a565609%3A0x1a89b70e31f412e9!2sApplePappa!5e0!3m2!1sru!2sru!4v1621525147645!5m2!1sru!2sru'
                width='100%'
                height='100%'
                title={`ApplePappaMap`}
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
              ></iframe>
              {/* <GMapCanvas>
                <iframe
                  title={`ApplePappaMap`}
                  width='100%'
                  height='100%'
                  id='gmap_canvas'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.396820044012!2d92.85920881609603!3d56.01180007945365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7afdc6a565609%3A0x1a89b70e31f412e9!2sApplePappa!5e0!3m2!1sru!2sru!4v1612635568820!5m2!1sru!2sru'
                  frameBorder={0}
                  aria-hidden='false'
                  tabIndex='0'
                  scrolling='no'
                  marginHeight={0}
                  marginWidth={0}
                />
              </GMapCanvas> */}
            </MapOuter>
          </Col>
        </Row>
      </Container>
    </CallBackSection>
  );
};

export default CallBack;
