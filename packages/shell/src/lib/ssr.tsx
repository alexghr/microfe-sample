import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router-dom";
import { ConfigContext } from "@alexghr/mfe-common";
import App from "../app";
import template from "./template";

export function render(env: Record<string, any>) {
  const stylesheet = new ServerStyleSheet();
  const body = renderToString(
    stylesheet.collectStyles(
      <>
        <StaticRouter>
          <ConfigContext.Provider value={env}>
            <App />
          </ConfigContext.Provider>
        </StaticRouter>
      </>
    )
  );

  return template({
    app: "app.js",
    body,
    style: stylesheet.getStyleTags(),
    env,
  });
}
