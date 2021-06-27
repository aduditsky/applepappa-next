import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';

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
  margin-bottom: 15px;
  max-width: 1170px;
  background-color: #fff;
  border-radius: 27px;
`;

const H1 = styled.h1`
  font-weight: 900;
`;

const SiteMapContainer = styled.div`
  width: 100%;
  padding: 2%;

  .category-block {
    padding: 1em 0;
    display: flex;
    flex-direction: column;
  }

  .models-block {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .category-tag {
    text-transform: none;
    text-decoration: underline;
    font-size: 1.6em;
    font-weight: 800;
  }

  .model-tag {
    padding: 0.5em;
    font-size: 1em;
  }
`;

export default function SiteMap({ service }) {
  const { categories, models } = service;

  const SiteMapObj = categories.map((category) =>
    Object.assign(
      { name: category.name, slug: category.slug },
      {
        models: models
          .map((model) =>
            Object.create({
              name: model.name,
              slug: model.slug,
              category: model.category.name,
            })
          )
          .filter((model) => model.category === category.name),
      }
    )
  );
  return (
    <AbandonedStyles>
      <Head>
        <title>
          Карта сайта | ApplePappa.ru - Выездной ремонт Apple в Красноярске
        </title>
      </Head>
      <H1>Карта сайта</H1>
      <SiteMapContainer>
        {SiteMapObj.map((category) => (
          <div
            className='category-block'
            key={`sitemap-category-${category.name}`}
          >
            <Link href={`/${category.slug}`} passHref>
              <a>
                <h2 className='category-tag'>{category.name}</h2>
              </a>
            </Link>
            <div className='models-block'>
              {category.models.map((model) => (
                <Link
                  key={`sitemap-model-${model.name}`}
                  href={`/${category.slug}/${model.slug}`}
                  passHref
                >
                  <a className='model-tag'>{model.name}</a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </SiteMapContainer>
    </AbandonedStyles>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://applepappadb.herokuapp.com/categories`);
  const modelsRes = await fetch(`http://applepappadb.herokuapp.com/models`);

  const categories = await res.json();
  const models = await modelsRes.json();

  const service = Object.assign({ categories, models });

  return {
    props: { service },
  };
}
