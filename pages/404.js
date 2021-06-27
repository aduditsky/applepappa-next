import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const AbandonedStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 54px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  max-width: 1170px;
  background-color: #fff;
  border-radius: 27px;
`;

const Emoji = styled.p`
  font-size: 1.5em;
`;

const AbandonedRoute = () => {
  return (
    <AbandonedStyles>
      <Head>
        <title>
          Несуществующая страница | ApplePappa.ru - Выездной ремонт Apple в
          Красноярске
        </title>
      </Head>
      <h1>У нас нет такой страницы 😰</h1>
      <Link href='/'>
        <a>Вернуться домой </a>
      </Link>
      <Emoji>🥺👉🏻👈🏻</Emoji>
    </AbandonedStyles>
  );
};

export default AbandonedRoute;
