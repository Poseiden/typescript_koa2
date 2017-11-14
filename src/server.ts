import { createApp } from './config/createApp';
import { routes } from './config/configRoute';

const app = createApp();

app.use(routes);

app.listen(3000);

console.log('The server is run on 3000 port!');
