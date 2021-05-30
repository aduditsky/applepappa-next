import { useContext } from 'react';
import { SiteContext } from '../../context/site.context';
import { Modal } from 'react-bootstrap';
import { Phone } from './modal.styles';

import { SocialLinks, Teg, SocialLink } from '../tradein/tradein.styles';
import ReactGA from 'react-ga';

const trackingId = 'UA-190320758-1';
ReactGA.initialize(trackingId);

const ModalBody = (props) => {
  return (
    <Modal
      {...props}
      size='xs'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>
            Записывайтесь
            <br />
            удобным для вас способом
          </h2>
          <span>
            {' '}
            <i className='fas fa-map-marker-alt'></i>
            <b> пр Мира 96, магазин Маска</b> <br /> ПН-ВС: 11:00-20:00 <br />{' '}
            БЕЗ ВЫХОДНЫХ <br />{' '}
          </span>
          <Phone>
            <span>Появились или остались вопросы?</span>
            <SocialLinks>
              <SocialLink
                phone
                href='tel:+79082122240'
                onClick={() => {
                  ReactGA.event({
                    category: 'Модальное окно',
                    action: 'Телефон',
                  });
                }}
              >
                <img src='/icons/phone.png' alt='Phone' />
              </SocialLink>
              <SocialLink
                telegram
                href='tg://resolve?domain=ApplePappa'
                onClick={() => {
                  ReactGA.event({
                    category: 'Модальное окно',
                    action: 'Телеграм',
                  });
                }}
              >
                <Teg>
                  <img src='/icons/telegram.svg' height='32' alt='Telegram' />
                </Teg>
              </SocialLink>
              <SocialLink
                whatsapp
                href='https://wa.me/+79082122240?text=Привет!'
                onClick={() => {
                  ReactGA.event({
                    category: 'Модальное окно',
                    action: 'WhatsApp',
                  });
                }}
              >
                <img src='/icons/whatsapp.svg' alt='WhatsApp' />
              </SocialLink>
              <SocialLink
                instagram
                href='https://www.instagram.com/applepappa.ru/'
                onClick={() => {
                  ReactGA.event({
                    category: 'Модальное окно',
                    action: 'Instagram',
                  });
                }}
              >
                <img src='/icons/instagram.svg' alt='Instagram' />
              </SocialLink>
              <SocialLink
                vk
                href='https://vk.com/applepappa'
                onClick={() => {
                  ReactGA.event({
                    category: 'Модальное окно',
                    action: 'VK',
                  });
                }}
              >
                <i className='fab fa-vk'></i>
              </SocialLink>
            </SocialLinks>
          </Phone>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const ModalInfo = () => {
  const { modalInfo, setModalInfo } = useContext(SiteContext);
  return (
    <ModalBody
      show={modalInfo}
      onHide={() => {
        setModalInfo(false);
      }}
    />
  );
};

export default ModalInfo;
