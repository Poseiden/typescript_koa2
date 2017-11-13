import * as Router from 'koa-router';
import * as HelloController from '../controllers/hello';

const router = new Router();

router.get('/', HelloController.hello);

export const routes = router.routes();
