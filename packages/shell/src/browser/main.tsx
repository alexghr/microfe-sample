import React from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrate } from "react-dom";
import { ConfigContext } from "@alexghr/mfe-app-common";

import App from "../app";

declare global {
  var env: Record<string, any> | undefined | null;
}

function main() {
  hydrate(
    <>
      <BrowserRouter>
        <ConfigContext.Provider value={window.env ?? {}}>
          <App />
        </ConfigContext.Provider>
      </BrowserRouter>
    </>,
    document.getElementById("root")
  );
}

main();
