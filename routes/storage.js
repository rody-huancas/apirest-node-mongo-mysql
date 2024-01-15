import Router from "express"
import { createItem, deleteItem, getItem, getItems } from "../controllers/storages.js";
import { uploadMiddleware } from "../utils/handleStorage.js";
import { validatorGetItem } from "../validators/storage.js";

const router = Router();

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", uploadMiddleware.single("myfile"), createItem);
router.delete("/:id", validatorGetItem, deleteItem);

export default router;
