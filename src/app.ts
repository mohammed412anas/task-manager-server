import express, { Express, Request ,Response} from "express";
import cors, { CorsOptions } from "cors";
import dotenv from 'dotenv';

dotenv.config()
const app: Express = express();
const PORT = process.env.PORT || 10000 ;
const corseOptions: CorsOptions = {
  origin: true,
  methods: ["GET", "PUT", "POST", "DELETE"],
};

app.use(cors(corseOptions));
app.use(express.json());

app.get('/',(req:Request,res:Response)=>res.send('Hello World!'))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
