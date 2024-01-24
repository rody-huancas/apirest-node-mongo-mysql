import Router from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth.js";
import { validatorLogin, validatorRegister } from "../validators/auth.js";

const router = Router();

router.post("/register", validatorRegister, registerCtrl);
router.post("/login", validatorLogin, loginCtrl);

export default router;
