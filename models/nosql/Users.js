import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema (
    {
        name: {
            type: String,
        },
        age: {
            type: Number,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        role: {
            type: ["user", "admin"],
            default: "user",
        }
    }, 
    {
        timestamps: true,
        versionKey: false
    }
);

const User = mongoose.model("users", UserSchema);
export default User;