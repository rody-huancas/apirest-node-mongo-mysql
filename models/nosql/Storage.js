import mongoose from 'mongoose';

const StorageSchema = new mongoose.Schema (
    {
        url: {
            type: String
        },
        filename: {
            type: Number
        }
    }, 
    {
        timestamps: true,
        versionKey: false
    }
);

const Storage = mongoose.model("storages", StorageSchema);
export default Storage;