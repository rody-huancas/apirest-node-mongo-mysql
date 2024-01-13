import 'dotenv/config';
import express from 'express';
import cors from 'cors';
// BD
import dbConnect from './config/mongo.js'
// Rutas
import routes from "./routes/index.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// rutas
app.use("/api", routes);

app.listen(PORT, ()=> {
    console.log(`App listening on http://localhost:${PORT}`);
});

// LLAMADO A LA BD
dbConnect();