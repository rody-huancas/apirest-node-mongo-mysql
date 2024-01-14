import Router from "express"
import { createItem } from "../controllers/storages.js";
import { uploadMiddleware } from "../utils/handleStorage.js";

const router = Router();

router.post("/", uploadMiddleware.single("myfile"), createItem);

export default router;
