import express from "express"
import indexRouter from "./routes/indexRouter.js";
import { join } from "path";

const port = 3333

const app = express();

app.set('views', join(import.meta.dirname, '../src/views'));
app.set('view engine', 'ejs');

app.use("/", indexRouter)

app.listen(port, () => {
    console.log("http://localhost:" + port)
})
