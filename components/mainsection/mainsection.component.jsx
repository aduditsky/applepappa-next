import { useContext } from 'react';
import { SiteContext } from '../../context/site.context';

import { MainSection, Content, OrderButton } from './mainsection.styles';
import ReactGA from 'react-ga';

const trackingId = 'UA-190320758-1';
ReactGA.initialize(trackingId);

const Main = () => {
  const { counter, setCounter, setModalInfo } = useContext(SiteContext);
  return (
    <MainSection>
      <Content>
        <h1
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          ApplePappa.ru - Выездной ремонт Apple <br /> в Красноярске
        </h1>
        <OrderButton
          onClick={() => {
            setModalInfo(true);
            ReactGA.event({
              category: 'Главная',
              action: 'Отремонтировать',
            });
          }}
        >
          Отремонтировать{' '}
          <img src='/icons/repair.svg' height='14' alt='Отремонтировать' />
        </OrderButton>
      </Content>
    </MainSection>
  );
};

export default Main;
