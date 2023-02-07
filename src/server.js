import bodyParser from "body-parser"
import express from "express"
import dotenv from "dotenv"
import cors from "cors";

import connectToMongo from "./config/mongo.js"
import feedbackRouter from "./routes/feedbackRouter.js"
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

const app = express()
dotenv.config()
connectToMongo()

app.use(bodyParser.json())
app.use(cors())

app.use("/api", cors(), feedbackRouter);
app.use("/", ...swaggerMiddleware());

app.listen(3000)