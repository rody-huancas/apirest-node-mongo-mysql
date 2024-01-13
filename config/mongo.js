import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        const DB_URI = process.env.DB_URI;
        const response = await mongoose.connect(DB_URI);
        console.log(`[CONEXIÓN EXITOSA]: ${response.connection.port}`);
    } catch (error) {
        console.log(`[ERROR]: ${error.message}`);
    }

}

export default dbConnect;