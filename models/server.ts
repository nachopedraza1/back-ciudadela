import express, { Application } from 'express';
import CharactersRoutes from '../routes/character';
import cors from 'cors'

class Server {

    private app: Application;
    private port: string;
    
    private apiPaths = {
        characters: '/api/characters'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto' + this.port);
        })
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.apiPaths.characters, CharactersRoutes)
    }

}

export default Server;