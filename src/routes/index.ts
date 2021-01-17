import { Router } from 'express';
import habilitacaoRouter from './habilitacao.routes';
import pessoaRouter from './pessoas.routes'; 

const routes = Router();

routes.use('/pessoa', pessoaRouter);
routes.use('/habilitacao', habilitacaoRouter);

export default routes;