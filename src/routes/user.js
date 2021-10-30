import { user } from "../services";
import chain from "./chain";
import bcrypt from "bcryptjs";

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

function generateToken(id) {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: 99999999999999,
  });
  return token;
}

router.post(
  `/user/login`,
  chain(async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const currentUser = await user.getByEmail(email);

    if (currentUser) {
      const correct = bcrypt.compareSync(password, currentUser.password);
      if (correct) {
        res.json({
          user: {
            email: currentUser.email,
          },
          auth: true,
          token: generateToken(currentUser.id),
        });
      } else {
        res.status(400);
      }
    } else {
      res.sendStatus(400);
    }
  })
);

router.post(
  `/user/register`,
  chain(async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const currentUser = await user.getByEmail(email);
    if (!currentUser) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = await user.createUser({
        email: email,
        password: hash,
      });
      res.json({
        user: newUser,
        auth: true,
        token: generateToken(newUser.id),
      });
    } else {
      res.sendStatus(400);
    }
  })
);

export default router;
