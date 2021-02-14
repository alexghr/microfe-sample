import React from "react";
import styled from "styled-components";
import {
  mediaQuery,
  spacing,
  LoadingIndicator,
  Container,
} from "@alexghr/mfe-common";
import useFeed from "../hooks/useFeed";
import Article from "./Article";

const TopHeadlines: React.FC = () => {
  const resp = useFeed();

  return (
    <Element>
      {resp.status === "loading" && <LoadingIndicator />}
      {resp.status === "success" && (
        <ArticlesGrid>
          {resp.body.articles.map((data) =>  <Article key={data.url} {...data} />)}
        </ArticlesGrid>
      )}
      {resp.status === "error" && (
        <>There was an error loading your news. Try refreshing this page</>
      )}
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

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${spacing.large};

  @media ${mediaQuery.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${spacing.base};
  }

  @media ${mediaQuery.phone} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${spacing.small};
  }
`;
