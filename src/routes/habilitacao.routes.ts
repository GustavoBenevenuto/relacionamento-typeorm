import { request, Router } from "express";
import { getRepository } from "typeorm";
import Habilitacao from "../models/Habilitacao";

const habilitacaoRouter = Router();

habilitacaoRouter.post('/', async (request, response) => {
    try {
        const { numero_habilitacao, categoria, id_pessoa } = request.body;

        const habilitacaoRepository = getRepository(Habilitacao);

        const habilitacao = habilitacaoRepository.create({
            numero_habilitacao,
            categoria,
            id_pessoa
        });

        await habilitacaoRepository.save(habilitacao);

        return response.json(habilitacao);
    } catch (error) {
        return response.status(400).json({error: 'Erro interno.'});
    }
});

habilitacaoRouter.get('/', async (request, response) => {
    const habilitacaoRepository = getRepository(Habilitacao);

    return response.json(await habilitacaoRepository.find());
});

export default habilitacaoRouter;