import { matchedData } from "express-validator";
import models from "../models/index.js";
import { handleHttpError } from "../utils/handleError.js";
const { tracksModel } = models;

// Listar los registros
const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await tracksModel.find({});
    res.send({ user, data });
  } catch (error) {
    handleHttpError(res, `[ERROR_GET_ITEMS]: ${error.message}`);
  }
};

// obtener un registro
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, `[ERROR_GET_ITEM]: ${error.message}`);
  }
};

// crear un registro
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM");
  }
};

// actualizar un registro
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, `[ERROR_UPDATE_ITEM]: ${error.message}`);
  }
};

// eliminar un registro
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.delete({ _id: id });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, `[ERROR_DELETE_ITEM]: ${error.message}`);
  }
};

export { getItems, getItem, createItem, updateItem, deleteItem };
