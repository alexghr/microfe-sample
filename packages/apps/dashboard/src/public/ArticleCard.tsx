import React from "react";
import Article from "../components/Article";
import { ArticleModel } from "../models/article";

export const ArticleCard: React.FC<{ id: string }> = ({ id }) => {
  // we don't have a get-by-id API so simulate everything using serialisation
  const article: ArticleModel = JSON.parse(id);

  return <Article {...article} />;
};
