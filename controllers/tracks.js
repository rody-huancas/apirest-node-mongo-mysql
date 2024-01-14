import { matchedData } from 'express-validator'
import models from "../models/index.js";
import { handleHttpError } from "../utils/handleError.js";
const { tracksModel } = models;


const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEMS")
    }
};


// obtener un registro
const getItem = async (req, res) => {

}

// crear un registro
const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await tracksModel.create(body);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEM")
    }
}

// actualizar un registro
const updateItem = async (req, res) => {

}

// eliminar un registro
const deleteItem = async (req, res) => {

}

export {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}