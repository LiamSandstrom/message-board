import express from "express"
import indexRouter from "./routes/indexRouter.js";

const port = 3333

const app = express();

app.use("/", indexRouter)

app.listen(port, () => {
    console.log("http://localhost:" + port)
})
