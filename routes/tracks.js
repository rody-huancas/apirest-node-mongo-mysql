import Router  from "express"
import { createItem, getItems } from "../controllers/tracks.js";
import { validatorCreateItem } from "../validators/tracks.js";

const router = Router();

router.get("/", getItems);
router.post("/", validatorCreateItem, createItem);

export default router;
