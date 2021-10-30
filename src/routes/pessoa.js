import { ExecutionError, ValidationError } from "../errors";
import { pessoa } from "../services";
import chain from "./chain";

const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth");

router.get(
  `/persons`,
  authMiddleware,
  chain(async (req, res, next) => {
    const pessoasList = await pessoa.getAll();
    res.send(pessoasList);
  })
);

router.get(
  `/person/:id(\\d+)`,
  authMiddleware,
  chain(async (req, res, next) => {
    const pessoaModel = await pessoa.getById(req.params.id);
    res.send(pessoaModel);
  })
);

router.post(
  `/person/create`,
  authMiddleware,
  chain(async (req, res, next) => {
    const nome = req.body.nome;
    const uf = req.body.uf;
    const idade = req.body.idade;
    const cep = req.body.cep;
    const city = req.body.city;

    const pessoaModel = await pessoa.createPerson({
      nome,
      uf,
      idade,
      cep,
      city,
    });
    if (pessoaModel) {
      res.send(pessoaModel);
    } else res.send(ExecutionError(400, "Falha ao salvar pessoa"));
  })
);

router.delete(
  `/person/:id(\\d+)`,
  authMiddleware,
  chain(async (req, res, next) => {
    const pessoaModel = await pessoa.getById(req.params.id);
    if (pessoaModel) {
      pessoaModel.destroy();
      res.sendStatus(200);
    } else {
      res.send(
        ValidationError(400, "Nenhum registro com esse ID foi encontrado")
      );
    }
  })
);

router.put(
  `/person/:id(\\d+)`,
  authMiddleware,
  chain(async (req, res, next) => {
    const person = req.body.person;
    const pessoaModel = await pessoa.updatePersonById(req.params.id, {
      ...person,
    });
    if (pessoaModel) {
      res.sendStatus(200);
    } else {
      res.send(
        ValidationError(400, "Nenhum registro com esse ID foi encontrado")
      );
    }
  })
);

export default router;
