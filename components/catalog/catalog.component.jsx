import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import {
  iPhone5series,
  iPhone6series,
  iPhone6P,
  iPhone6SP,
  iPhone7,
  iPhone7P,
  iPhone8,
  iPhone8P,
  iPhoneX,
  iPhoneXR,
  iPhoneXS,
  iPhoneXSMax,
  iPhone11,
  iPhone11Pro,
  iPhone11ProMax,
  iPhone12,
  iPhone12Mini,
  iPhone12ProMax,
  iPadAir,
  iPadAir2,
  iPadAir2019,
  iPadAir2020,
  iPadPro105,
  iPadPro2016,
  iPadProNew,
  iPadOld,
  iPadMini1,
  iPadMini2,
  iPadMini3,
  iPadMini4,
  iPadMini5,
} from './data';
import {
  CatalogSection,
  DeviceUl,
  ModelUl,
  Column,
  TableStyled,
} from './catalog.styles';
import ReactGA from 'react-ga';
import { MacbookAll } from './macbook';
import { AppleWatchAll } from './applewatch';
import { Phone } from '../footer/footer.styles';

const trackingId = 'UA-190320758-1';
ReactGA.initialize(trackingId);

const Catalog = () => {
  const [show, setShow] = useState(true);

  const iPhone = {
    iPhoneSE: {
      name: 'iPhone SE',
      services: iPhone5series,
    },
    iPhone6: {
      name: 'iPhone 6',
      services: iPhone6series,
    },
    iPhone6Plus: {
      name: 'iPhone 6 Plus',
      services: iPhone6P,
    },
    iPhone6S: {
      name: 'iPhone 6S',
      services: iPhone6series,
    },
    iPhone6SPlus: {
      name: 'iPhone 6S Plus',
      services: iPhone6SP,
    },
    iPhone7: {
      name: 'iPhone 7',
      services: iPhone7,
    },
    iPhone7Plus: {
      name: 'iPhone 7 Plus',
      services: iPhone7P,
    },
    iPhone8: {
      name: 'iPhone 8',
      services: iPhone8,
    },
    iPhoneSE2: {
      name: 'iPhone SE2',
      services: iPhone8,
    },
    iPhone8Plus: {
      name: 'iPhone 8 Plus',
      services: iPhone8P,
    },
    iPhoneX: {
      name: 'iPhone X',
      services: iPhoneX,
    },
    iPhoneXS: {
      name: 'iPhone XS',
      services: iPhoneXS,
    },
    iPhoneXSMax: {
      name: 'iPhone XS Max',
      services: iPhoneXSMax,
    },
    iPhoneXR: {
      name: 'iPhone XR',
      services: iPhoneXR,
    },
    iPhone11: {
      name: 'iPhone 11',
      services: iPhone11,
    },
    iPhone11Pro: {
      name: 'iPhone 11 Pro',
      services: iPhone11Pro,
    },
    iPhone11ProMax: {
      name: 'iPhone 11 Pro Max',
      services: iPhone11ProMax,
    },
    iPhone12: {
      name: 'iPhone 12',
      services: iPhone12,
    },
    iPhone12Mini: {
      name: 'iPhone 12 Mini',
      services: iPhone12Mini,
    },
    iPhone12ProMax: {
      name: 'iPhone 12 Pro Max',
      services: iPhone12ProMax,
    },
  };
  const iPad = {
    iPadOld: {
      name: 'iPad 2-3-4',
      services: iPadOld,
    },
    iPadMini1: {
      name: 'iPad Mini 1',
      services: iPadMini1,
    },
    iPadMini2: {
      name: 'iPad Mini 2',
      services: iPadMini2,
    },
    iPadMini3: {
      name: 'iPad Mini 3',
      services: iPadMini3,
    },
    iPadMini4: {
      name: 'iPad Mini 4',
      services: iPadMini4,
    },
    iPadMini5: {
      name: 'iPad Mini 5',
      services: iPadMini5,
    },
    iPadAir: {
      name: 'iPad Air',
      services: iPadAir,
    },
    iPadAir2: {
      name: 'iPad Air 2',
      services: iPadAir2,
    },
    iPadAir2019: {
      name: 'iPad Air 2019',
      services: iPadAir2019,
    },
    iPadAir2020: {
      name: 'iPad Air 2020',
      services: iPadAir2020,
    },
    iPadPro2016: {
      name: 'iPad Pro 2016',
      services: iPadPro2016,
    },
    iPadPro105: {
      name: 'iPad Pro 10,5',
      services: iPadPro105,
    },
    iPadPro11: {
      name: 'iPad Pro 11',
      services: iPadProNew,
    },
    iPadPro112: {
      name: 'iPad Pro 11 2020',
      services: iPadProNew,
    },
    iPadPro129: {
      name: 'iPad Pro 12,9',
      services: iPadProNew,
    },
    iPadPro1292: {
      name: 'iPad Pro 12,9 2020',
      services: iPadProNew,
    },
  };
  const macbook = {
    macbook: {
      name: 'Macbook 2010',
      services: MacbookAll,
    },
    macbook23: {
      name: 'Macbook Air',
      desc: '2010-2018',
      services: MacbookAll,
    },
    macbookAirNew: {
      name: 'Macbook Air ',
      desc: 'Retina 2019',
      services: MacbookAll,
    },
    macbook12: {
      name: 'Macbook 12',
      desc: 'Retina 2016',
      services: MacbookAll,
    },
    macbookPro13: {
      name: 'Macbook Pro 13',
      desc: '2011-2020',
      services: MacbookAll,
    },
    macbookPro15: {
      name: 'Macbook Pro 15',
      desc: '2011-2020',
      services: MacbookAll,
    },
    macbookPro16: {
      name: 'Macbook Pro 16',
      desc: '2020',
      services: MacbookAll,
    },
  };
  const AppleWatch = {
    orig: {
      name: 'Apple Watch',
      services: AppleWatchAll,
    },
    s1: {
      name: 'Apple Watch S1',
      services: AppleWatchAll,
    },
    s2: {
      name: 'Apple Watch S2',
      services: AppleWatchAll,
    },
    s3: {
      name: 'Apple Watch S3',
      services: AppleWatchAll,
    },
    s4: {
      name: 'Apple Watch S4',
      services: AppleWatchAll,
    },
    s5: {
      name: 'Apple Watch S5',
      services: AppleWatchAll,
    },
    s6: {
      name: 'Apple Watch S6',
      services: AppleWatchAll,
    },
    se: {
      name: 'Apple Watch SE',
      services: AppleWatchAll,
    },
  };
  const deviceMap = new Map([
    ['iPhone', iPhone],
    ['iPad', iPad],
    ['Macbook', macbook],
    ['Apple Watch', AppleWatch],
  ]);

  const device = [];

  deviceMap.forEach((value, key) => {
    return device.push(key);
  });

  const [model, setModel] = useState(
    Object.keys(deviceMap.get('iPhone')).map(
      (key) => deviceMap.get('iPhone')[key]
    )
  );

  const [serviceList, setServiceList] = useState(model[0].services);

  //   const [windowWidth, setWindowWidth] = useState(1170); //document.documentElement.clientWidth

  //   window.addEventListener('resize', () => {
  //     setWindowWidth(1170); //document.documentElement.clientWidth
  //   });

  const [gridSize, setGridSize] = useState(4);

  //   useEffect(() => {
  //     windowWidth >= 768 ? setShow(true) : setShow(false);
  //     windowWidth < 380
  //       ? setGridSize(2)
  //       : windowWidth < 600
  //       ? setGridSize(3)
  //       : windowWidth < 768
  //       ? setGridSize(4)
  //       : windowWidth < 980
  //       ? setGridSize(5)
  //       : setGridSize(6);
  //   }, [windowWidth]);

  useEffect(() => {
    setActiveModel(model[0].name);
    setServiceList(model[0].services);
  }, [model]);

  const [activeDevice, setActiveDevice] = useState(device[0]);
  const [activeModel, setActiveModel] = useState(model[0].name);

  return (
    <CatalogSection>
      <Container>
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

            {/* Устройство */}
            <DeviceUl>
              {device.map((value) => (
                <li
                  key={value}
                  onClick={() => {
                    activeDevice !== value &&
                      setModel(
                        Object.keys(deviceMap.get(value)).map(
                          (key) => deviceMap.get(value)[key]
                        )
                      );
                    setActiveDevice(value);
                    ReactGA.event({
                      category: 'Устройство',
                      action: `${value}`,
                    });
                  }}
                  className={activeDevice === value ? 'active' : ''}
                >
                  {value}{' '}
                  {activeDevice === value ? (
                    <i className='fas fa-check-square'></i>
                  ) : (
                    <i className='far fa-check-square'></i>
                  )}
                </li>
              ))}
            </DeviceUl>
            {/* Модель устройства */}
            <ModelUl gridColumn={gridSize}>
              {model.map(({ name, desc, services }) => (
                <li
                  key={Math.random()}
                  onClick={() => {
                    setServiceList(services);
                    setActiveModel(name);
                    ReactGA.event({
                      category: 'Модель',
                      action: `${name}`,
                    });
                  }}
                  className={name === activeModel ? 'active' : ''}
                >
                  {name}
                  {desc && (
                    <>
                      <br /> {desc}
                    </>
                  )}
                </li>
              ))}
            </ModelUl>
            <p className='text-center' style={{ fontSize: '20px' }}>
              <b>
                Не нашли свое устройство? <br /> Уточните по телефону
              </b>{' '}
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
            {/* Итоговые цены */}
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
                {serviceList.map(({ id, name, time, price }) => {
                  return (
                    <tr key={id}>
                      <td>{name}</td>
                      {show && <td>{activeModel}</td>}
                      {show && <td>{time}</td>}
                      <td>{price}</td>
                    </tr>
                  );
                })}
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

export default Catalog;
