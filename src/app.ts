import express, { Express } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import router from "./routes/router";

dotenv.config();
const app: Express = express();
const PORT = process.env.PORT || 10000;
const corseOptions: CorsOptions = {
  origin: true,
  methods: ["GET", "PUT", "POST", "DELETE"],
};

app.use(cors(corseOptions));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
