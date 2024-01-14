import mongoose from 'mongoose';

const StorageSchema = new mongoose.Schema (
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    }, 
    {
        timestamps: true,
        versionKey: false
    }
);

const Storage = mongoose.model("storages", StorageSchema);
export default Storage;