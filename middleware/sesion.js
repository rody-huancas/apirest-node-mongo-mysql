import { handleHttpError } from "../utils/handleError.js ";
import { verifyToken } from "../utils/handleJwt.js";
import models from "../models/index.js";

const { usersModel } = models;

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, "NEED_SESSION", 401);
      return;
    }

    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);

    if (!dataToken._id) {
      handleHttpError(res, "ERROR_ID_TOKEN", 401);
      return;
    }

    const user = await usersModel.findById(dataToken._id);
    req.user = user;
    next();
  } catch (error) {
    handleHttpError(res, "NOT_SESSION", 401);
  }
};

export { authMiddleware };
