import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderInfoSection, Image, Description } from './slider.info.styles';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const SliderInfo = () => {
  return (
    <SliderInfoSection>
      <Container>
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          autoplay
          loop
          pagination={{ clickable: true }}
          // onSlideChange={() => {}}
          // onSwiper={(swiper) => {}}
        >
          <SwiperSlide>
            <Row>
              <Description xs={12}>
                <h2>Выезд мастера куда угодно и когда удобно.</h2>
                <Image src='/images/slider/slide-1.jpg' alt='Перый слайд' />
              </Description>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Description xs={12}>
                <h2>Замена комплектующих от 15 до 90 минут.</h2>
                <Image src='/images/slider/slide-2.jpg' alt='Второй слайд' />
              </Description>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Description xs={12}>
                <h2>Выдаем подменное устройство на время ремонта.</h2>
                <Image src='/images/slider/slide-3.jpg' alt='Третий слайд' />
              </Description>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Description xs={12}>
                <h2>При сложном ремонте, защита на дисплей в подарок.</h2>
                <Image src='/images/slider/slide-5.jpg' alt='Пятый слайд' />
              </Description>
            </Row>
          </SwiperSlide>
        </Swiper>
      </Container>
    </SliderInfoSection>
  );
};

export default SliderInfo;
