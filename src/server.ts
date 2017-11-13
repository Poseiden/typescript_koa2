import * as Koa from 'koa';
import { routes } from './config/configRoute';

const app = new Koa();

app.use(routes);

app.listen(3000);

console.log('The server is run on 3000 port!');
