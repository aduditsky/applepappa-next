import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';

export const OrderButton = styled(Button)`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    border-radius: 25px;
    letter-spacing: -.005em;
    font-weight: 600;
    background: #000000;
    position: relative;
    &:hover{
        text-decoration: underline;
    }
    img{
        margin-left: 5px;
    }
`;

export const MainSection = styled.section`
    width: 100%;
    background-image: url('/images/rAtzDB6hWrU.jpg');
    /* background-image: url('/images/9KeqjpyALyQ.jpg'); */
    background-position: center;
    background-size: cover;
    /* background-attachment: fixed; */
    min-height: 80vh;

    font-weight: 500;
    font-size: 25px;
    
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before{
        content: '';
        position: absolute;
        background: rgba(0,0,0,0.5);
        top: 0;
        bottom: 0;
        left:0; 
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
`;

export const Content = styled(Container)`
    z-index: 50;
    position: relative;
    *{
        color: #fff;
        letter-spacing: -.005em;
    }
    h1{
        font-size: 26px;
        font-weight: 600;
        
    }
    h2{
        font-size: 22px;
        font-weight: 500;
    }
    @media screen and (max-width: 450px){
        h1{
        font-size: 22px;
        font-weight: 600;
        }
        h2{
            font-size: 18px;
            font-weight: 500;
        }
    }
`;