import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routesLead from './src/routes/lead';
import db from './src/db/connection';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8081';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplication funcionando ${this.port}`)
        })
    }

    routes() {
        this.app.get('/lead', (req: Request, res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })
         this.app.use('/api/lead', routesLead) 
       
    }

    midlewares(){
        this.app.use(express.json());
        // Cors
        this.app.use(cors());
    }
    


    // set port, listen for requests
  

    async dbConnect() {
       try {
            await db.authenticate();
            console.log(`Conectado ao Banco de Dados com sucesso`);
        }catch (error) {
            console.log(error);
            console.log('Error a conecção com a base de dados!' , error);
       }
    } 
}

export default Server;