import Koa from 'koa';
import serveStatic from 'koa-static';
import { NEWS_API_TOKEN, PORT } from './config';
import { render, staticDir } from '@alexghr/mfe-shell';

export default async function createServer() {
  const server = new Koa();

  server.use(async (ktx, next) => {
    try {
      await next();
    } catch (err) {
      console.error("Error processing request %s %s: %o", ktx.method, ktx.path, err);
      ktx.status = 500;
      ktx.body = 'Internal server error';
    }
  });

  server.use(serveStatic(staticDir));
  server.use(ktx => ktx.body = render({ NEWS_API_TOKEN }));

  return () => server.listen(PORT);
}
