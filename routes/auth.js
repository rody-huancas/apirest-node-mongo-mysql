import Router from "express"
import { validatorLogin, validatorRegister } from "../validators/auth.js";
import { matchedData } from "express-validator";

const router = Router();

router.post("/register", validatorRegister, (req, res) => {
    req = matchedData(req);
    res.send({ data: req });
});

export default router;
