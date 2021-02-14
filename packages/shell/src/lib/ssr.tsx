import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router-dom";
import { ConfigContext } from "@alexghr/mfe-app-common";
import App from "../app";
import template from "./template";

type RenderProps = {
  env: Record<string, any>;
  url: URL;
};

export function render({ env, url }: RenderProps) {
  const stylesheet = new ServerStyleSheet();
  const body = renderToString(
    stylesheet.collectStyles(
      <>
        <StaticRouter
          location={{
            pathname: url.pathname,
            search: url.search,
            hash: url.hash,
          }}
        >
          <ConfigContext.Provider value={env}>
            <App />
          </ConfigContext.Provider>
        </StaticRouter>
      </>
    )
  );

  return template({
    app: "/app.js",
    body,
    style: stylesheet.getStyleTags(),
    env,
  });
}
