import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import App from '../app';
import template from './template';

export function render() {
  const stylesheet = new ServerStyleSheet();
  const body = renderToString(stylesheet.collectStyles(
    <>
      <StaticRouter>
        <App />
      </StaticRouter>
    </>));

  return template({
    app: 'app.js',
    body,
    style: stylesheet.getStyleTags()
  });
}
