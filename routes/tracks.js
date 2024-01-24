import Router from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/tracks.js";
import { validatorCreateItem, validatorGetItem } from "../validators/tracks.js";
import { authMiddleware } from "../middleware/sesion.js";

const router = Router();

router.get("/", authMiddleware, getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", validatorCreateItem, createItem);
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

export default router;
