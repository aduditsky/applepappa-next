import React from 'react';

import { TradeInSection, SocialLinks, Teg, SocialLink } from './tradein.styles';
import { Container, Row, Col } from 'react-bootstrap'

const TradeIn = () => {
    return(
        <TradeInSection>
            <Container>
                <Row>
                    <Col>
                        <h3>Не хочешь ремонтировать? Продай!</h3>
                        <p><i className="fas fa-map-marker-alt"></i> ПР МИРА 96, МАГАЗИН МАСКА</p>
                        <span>Свяжись с нами любым удобным для тебя способом:</span>
                        <SocialLinks>
                            <SocialLink phone href='tel:+79082122240'><img src='/icons/phone.png' alt='Phone'/></SocialLink>
                            <SocialLink telegram href='tg://resolve?domain=ApplePappa'><Teg><img src='/icons/telegram.svg' height='32' alt='Telegram'/></Teg></SocialLink>
                            <SocialLink whatsapp href='https://wa.me/+79082122240?text=Привет!%20Я%20хочу%20продать%20телефон.'><img src='/icons/whatsapp.svg' alt='WhatsApp' /></SocialLink>
                            <SocialLink instagram href='https://www.instagram.com/applepappa.ru/'><img src='/icons/instagram.svg' alt='Instagram' /></SocialLink>
                            <SocialLink vk href='https://vk.com/applepappa'><i className="fab fa-vk"></i></SocialLink>
                        </SocialLinks>
                    </Col>
                </Row>
            </Container>
        </TradeInSection>
    )
}

export default TradeIn;