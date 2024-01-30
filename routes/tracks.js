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
import { checkRol } from "../middleware/rol.js";

const router = Router();

router.get("/", authMiddleware, getItems);
router.get("/:id", authMiddleware, validatorGetItem, getItem);
router.post(
  "/",
  authMiddleware,
  validatorCreateItem,
  checkRol(["admin"]),
  createItem
);
router.put(
  "/:id",
  authMiddleware,
  validatorGetItem,
  validatorCreateItem,
  updateItem
);
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

export default router;
