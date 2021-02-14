import React from 'react';
import styled from 'styled-components';
import LoadingIndicator from './LoadingIndicator';
import { mediaQuery, spacing } from '../const';
import { Container } from './Container';
import useFeed from '../hooks/useFeed';

const TopHeadlines: React.FC = () => {
  const resp = useFeed();

  return (
    <Element>
      {resp.status === 'loading' && <LoadingIndicator />}
      {resp.status === 'success' && (
        <ArticleContainer>
           {resp.body.articles.map(({ url, urlToImage, title, description }) => (
            <ExternalLink href={url} key={url}>
              <Article>
                <Img src={urlToImage} />
                <Title>{title}</Title>
                <Description>{description}</Description>
              </Article>
            </ExternalLink>
          ))}
        </ArticleContainer>
      )}
      {resp.status === 'error' && <>There was an error loading your news. Try refreshing this page</>}
    </Element>
  );
};

export default TopHeadlines;

const Element = styled(Container)`
  margin: ${spacing.large} auto;

  @media ${mediaQuery.tablet} {
    margin: ${spacing.base};
  }

  @media ${mediaQuery.phone} {
    margin: ${spacing.small};
  }
`;

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${spacing.large};

  @media ${mediaQuery.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${spacing.base}
  }

  @media ${mediaQuery.phone} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${spacing.small};
  }
`;

const ExternalLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

const Article = styled.article`
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: black;

  @media ${mediaQuery.tablet} {
    height: 150px;
  }

  @media ${mediaQuery.phone} {
    height: 100px;
  }
`;

const Title = styled.span`
  display: block;
  font-weight: bold;
  text-decoration: underline;
`;

const Description = styled.p`
`;
