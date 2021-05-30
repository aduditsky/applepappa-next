import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { FooterBlock, Content, ColSN, Logo, Contacts, Phone} from './footer.styles';
import ReactGA from 'react-ga';

const trackingId = "UA-190320758-1"; 
ReactGA.initialize(trackingId);

const Footer = () => {

    const date= new Date();
    return(
        <FooterBlock>
            <Content>
                <Row>
                    <Col xs={12} md={8}>
                        <Logo style={{marginBottom: '10px'}}>
                            <img src='/images/logo.png' width='44' alt='ApplePappa.ru' />
                            <span>ApplePappa.ru</span>
                        </Logo>
                        © 2014 - {date.getFullYear()} «Выездной ремонт Apple в Красноярске». Все права защищены.
                    </Col>
                    <ColSN xs={12} md={4} >
                        <Phone href="tel:+79082122240" onClick={() => {
                            ReactGA.event({
                                category: 'Подвал',
                                action: 'Телефон'
                            });
                        }}><i className="fas fa-phone-alt"></i> +7 (908) 212-22-40</Phone>
                        <Contacts>
                            <a href='https://vk.com/applepappa' onClick={() => {
                                ReactGA.event({
                                    category: 'Соц. Сети',
                                    action: 'VK'
                                });
                            }}><img src='/icons/vk.svg' height={24} alt='VK' /></a>
                            <a href='tg://resolve?domain=ApplePappa' onClick={() => {
                                ReactGA.event({
                                    category: 'Соц. Сети',
                                    action: 'Telegram'
                                });
                            }} ><img src='/icons/telegram.svg' height={24} alt='Telegram' /></a>
                            <a href='https://www.instagram.com/applepappa.ru/' onClick={() => {
                                ReactGA.event({
                                    category: 'Соц. Сети',
                                    action: 'Instagram'
                                });
                            }}><img src='/icons/instagram.svg' height={24} alt='Instagram' /></a>
                            <a href='https://wa.me/+79082122240?text=Привет!%20Я%20хочу%20уточнить...' onClick={() => {
                                ReactGA.event({
                                    category: 'Соц. Сети',
                                    action: 'WhatsApp'
                                });
                            }}><img src='/icons/whatsapp.svg' height={24} alt='WhatsApp' /></a>
                        </Contacts>
                    </ColSN>
                </Row>
            </Content>
        </FooterBlock>
    )
}

export default Footer;