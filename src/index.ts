import "dotenv/config";
import express from "express";
import { startListerner } from "./indexer/listener.js";
import routes from "./api/routes.js";

const app = express()

app.use(express.json())
app.use("/api", routes)

app.listen(3000, () => {
    console.log("Api running on port 3000");
})

startListerner()

