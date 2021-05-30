import styled from 'styled-components';

export const TradeInSection = styled.section`
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;

    background: #111;

    display: flex;
    justify-content: center;
    align-items: center;
    *{
        color: #fff;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    
`;

export const SocialLink = styled.a`
    outline: none;
    color: #ffffff;
    text-decoration: none !important; 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width:48px;
    height:48px;
    padding: 2px;
    margin-right: 10px;

    border-radius:20%/20%;
    background-color:#ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    position:relative;

    &:before, &:after {
        content:'';
        position:absolute;
        z-index:-1;
    }
    &:before {
        border-radius: 2%/30%;
        top: 33px;
        bottom: 33px;
        right: -2px;
        left: -2px;
    }
    &:after {
        border-radius: 30%/2%;
        left: 33px;
        right: 33px;
        top: -2px;
        bottom: -2px;
    }
    &:last-child{
        margin-right: 0;
    }
    img{
        width: auto;
        height: 42px;
    }
    ${({ telegram }) => telegram && `   
        img{
            margin: 0 2.625px;
        }

    ` }
    ${({ phone }) => phone && `
        background-color: #51ee6d;  
        img{
            margin: 0 2.625px;
            fill: #fff;
            width:34px;
            height:34px;
        }

    ` }
    ${({ whatsapp }) => whatsapp && `
        background-color: rgb(67, 216, 84); 
        img{
            padding: 0 2.625px;
        }
    ` }
    ${({ instagram }) => instagram && `
        background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%); 
        img{
            padding: 0 2.625px;
        }
    ` }
    ${({ vk }) => vk && `
        background: #2787F5;
        i{
            color: #fff;
            font-size: 30px;
            text-decoration: none;

        }
        img{
            padding: 0 2.625px;
        }
    ` }
`;

export const Teg = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0,136,204);
    border-radius: 50%;
    padding: 3px;
    img{
        height: 24px;

    }
`