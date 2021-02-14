import React from "react";
import styled from "styled-components";
import {
  mediaQuery,
} from "@alexghr/mfe-common";
import { ArticleModel } from "../models/article";

const Article: React.FC<ArticleModel> = ({
  url,
  urlToImage,
  title,
  description,
}) => (
  <ExternalLink href={url} key={url}>
    <Element>
      <Img src={urlToImage} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Element>
  </ExternalLink>
);

export default Article;

const ExternalLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

const Element = styled.article``;

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

const Description = styled.p``;
