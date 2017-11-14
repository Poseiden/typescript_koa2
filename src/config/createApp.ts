import * as Koa from 'koa';
import { routes } from './configRoute';

export const createApp = () => {
  const app = new Koa();
  app.use(routes);

  return app;
};

