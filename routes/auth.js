import Router from "express";
import { matchedData } from "express-validator";
import { validatorLogin, validatorRegister } from "../validators/auth.js";
import { encrypt, compare } from "../utils/handlePasswod.js";
import models from "../models/index.js";
const { usersModel } = models;

const router = Router();

router.post("/register", validatorRegister, async (req, res) => {
  req = matchedData(req);
  const password = await encrypt(req.password);
  const body = { ...req, password };
  const data = await usersModel.create(body);
  data.set("password", undefined, { strict: false });
  res.send({ data });
});

export default router;
