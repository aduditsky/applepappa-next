import styled from 'styled-components';
import { Col } from 'react-bootstrap'

export const SliderInfoSection = styled.section`
    width: 100%;
    min-height: 25vh;
    padding: 3rem 0;
    background: #111;
    
    display: flex;
    justify-content: center;
    align-items: center;
    *{
        color: #fff;
    }

    .swiper-pagination{
        width: unset;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
        padding: .2em .5em;
        border-radius: 12.8px!important;
        background-color: rgba(255,255,255,.4);
        backdrop-filter: blur(5px);
    }

    .swiper-pagination-bullet{
        background: #111;
    }
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 25px;
    overflow: hidden;
`;

export const Description = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    p, span{
        font-size: 16px;
    }
    @media screen and (max-width: 450px){
        p, span{
        font-size: 14px;
    }
    }
`;