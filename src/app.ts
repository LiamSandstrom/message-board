import express from "express"
import indexRouter from "./routes/indexRouter.js";
import { join } from "path";
import { errorHandler } from "./helpers/errorHandler.js";

const app = express();
const port = 3333

app.set('views', join(import.meta.dirname, '../src/views'));
app.set('view engine', 'ejs');
app.use(express.static(join(import.meta.dirname, "../src/public")))

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter)

app.use(errorHandler);

app.listen(port, (error) => {
    if (error) throw error;

    console.log("http://localhost:" + port)
})
