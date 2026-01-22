import { Router } from "express";
import { index, newItem } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", index)
indexRouter.get("/new", newItem)

export default indexRouter 
