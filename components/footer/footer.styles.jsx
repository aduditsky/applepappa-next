import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap'

export const ColSN = styled(Col)`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    @media screen and (max-width: 768px){
        justify-content: center;  
        margin-top: 10px; 
    }
`

export const Phone = styled.a`
    margin: 15px 0;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    &:hover{
        color: #b1b1b1;
    }
    
`;

export const FooterBlock = styled.footer`
    width: 100%;
    padding: 1em 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0,0,0, 1);
    color: #fff;
    @media screen and (max-width: 768px){

        padding: 30px 0;
    }
`;

export const Content = styled(Container)`
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    img{
        margin-right: 10px;
    }
`;

export const Contacts = styled.div`
    display: grid;
    justify-content: flex-end;
    align-items: center;
    justify-items: center;
    align-content: center;
    grid-template-columns: 25px 25px 25px 25px;
    grid-gap: 10px;
`