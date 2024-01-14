import Router  from "express"
import { createItem, getItems } from "../controllers/tracks.js";

const router = Router();

router.get("/", getItems);
router.post("/", createItem);

export default router;
