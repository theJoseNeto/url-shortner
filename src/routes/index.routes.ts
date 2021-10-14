import { Router } from 'express';
import {URL_Controller} from '../controllers/URLController';
const routes = Router();

const url_controller = new URL_Controller();
routes.post('/shorten', url_controller.shorten);

routes.get('/:hash', url_controller.redirect);

export default routes;
