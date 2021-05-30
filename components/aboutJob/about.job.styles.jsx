import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const AboutJobSection = styled.section`
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Column = styled(Col)`
    background-color: #fff;
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Diagram = styled.div`
    display: grid;
    grid-gap: 15px;
    margin: 15px 0;
    justify-items: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    grid-template-columns: ${({gridSize}) => gridSize === 5 ? '1fr 1fr 1fr 1fr 1fr' : '1fr'};
`

export const CellCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Cell = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3px;
    i{
        font-size: 30px;
        color: #111;
    }
    p{
        font-weight: 700;
        text-align: center;
        margin-top: 5px;
    }
`;