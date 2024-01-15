import mongoose from 'mongoose';
import MongooseDelete from 'mongoose-delete';

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

StorageSchema.plugin(MongooseDelete, { overrideMethods: 'all' });
const Storage = mongoose.model("storages", StorageSchema);
export default Storage;