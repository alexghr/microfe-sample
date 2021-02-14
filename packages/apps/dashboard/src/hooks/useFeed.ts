import { useContext } from "react";
import { ConfigContext } from "@alexghr/mfe-app-common";
import useFetch from "./useFetch";
import { ArticleModel } from "../models/article";

const BASE_URL = new URL("https://newsapi.org/");

type Articles = {
  articles: ReadonlyArray<ArticleModel>;
};

type Error = {
  code: string;
  message: string;
};

export default function useFeed() {
  const config = useContext(ConfigContext);
  const url = new URL("v2/top-headlines", BASE_URL);
  url.searchParams.set("apiKey", config.NEWS_API_TOKEN);
  url.searchParams.set("language", "en");
  url.searchParams.set("pageSize", "20");
  url.searchParams.set("page", "0");

  return useFetch<Articles, Error>(String(url));
}
