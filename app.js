import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`App listening on http://localhost:${port}`);
});
