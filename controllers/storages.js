import models from "../models/index.js";

const { storagesModel } = models;
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {

};

// obtener un registro
const getItem = async (req, res) => {

}

// crear un registro
const createItem = async (req, res) => {
    const { body, file } = req;

    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }

    const data = await storagesModel.create(fileData)
    res.send({ data })
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