import { matchedData } from "express-validator";
import fs from 'fs';
import models from "../models/index.js";
import { handleHttpError } from "../utils/handleError.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const { storagesModel } = models;
const PUBLIC_URL = process.env.PUBLIC_URL;
const __dirname = dirname(fileURLToPath(import.meta.url));
const MEDIA_PATH = `${__dirname}/../storage`;

// Listar los registros
const getItems = async (req, res) => {
    try {
        const data = await storagesModel.find({});
        res.send({ data });
    } catch (error) {
        handleHttpError(res, `[ERROR_LIST_ITEMS]: ${error.message}`);
    }
};

// obtener un registro
const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await storagesModel.findById(id);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, `[ERROR_DETAIL_ITEM]: ${error.message}`);
    }
}

// crear un registro
const createItem = async (req, res) => {
    try {
        const {     file } = req;
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await storagesModel.create(fileData)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, `[ERROR_DETAIL_ITEM]: ${error.message}`);
    }
}

// eliminar un registro
const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const dataFile = await storagesModel.findById(id);
        // await storagesModel.deleteOne(id);
        await storagesModel.delete({ _id: id });
        const { filename } = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;

        // fs.unlinkSync(filePath)
        const data = {
            filePath,
            deleted: 1
        }

        res.send({ data });
    } catch (error) {
        handleHttpError(res, `[ERROR_DETAIL_ITEM]: ${error.message}`);
    }
}


export {
    getItems,
    getItem,
    createItem,
    deleteItem
}