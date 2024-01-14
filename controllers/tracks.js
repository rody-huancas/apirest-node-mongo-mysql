import models from "../models/index.js";
const { tracksModel } = models;


const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        console.log(data);
        res.send({ data });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};


// obtener un registro
const getItem = async (req, res) => {

}

// crear un registro
const createItem = async (req, res) => {
    const { body } = req;
    const data = await tracksModel.create(body);
    res.send({ data });
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