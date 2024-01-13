import Router from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const router = Router();
const PATH_ROUTES = dirname(fileURLToPath(import.meta.url));

const removeExtension = (filename) => {
    return filename.split('.').shift();
}

const loadRoutes = async () => {
    fs.readdirSync(PATH_ROUTES).map(async (file) => {
        const name = removeExtension(file);
        if (name !== 'index') {
            console.log(`Cargando ruta ${name}`);
            const routeModule = await import(`./${file}`);
            router.use(`/${name}`, routeModule.default);
        }
    })
}

loadRoutes();

export default router;
