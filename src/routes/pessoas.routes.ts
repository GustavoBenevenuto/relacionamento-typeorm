import { request, response, Router } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import Habilitacao from "../models/Habilitacao";
import Pessoa from "../models/Pessoa";

const pessoaReouter = Router();

pessoaReouter.post('/', async (request, response) => {
    const { nome, idade, id_habilitacao  } = request.body;

    const pessoaRepository = getRepository(Pessoa);

    const pessoa = pessoaRepository.create({
        nome,
        idade
    });

    await pessoaRepository.save(pessoa);

    console.log(pessoa);

    return response.json(pessoa);
});

pessoaReouter.get('/', async (request, response) => {
    const pessoaRepository = getRepository(Pessoa);

    return response.json(await pessoaRepository.find());
});

export default pessoaReouter;