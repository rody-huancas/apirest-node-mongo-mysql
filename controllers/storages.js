import models from "../models/index.js";

const { storagesModel } = models;
const PUBLIC_URL = process.env.PUBLIC_URL;

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

export {
    createItem
}