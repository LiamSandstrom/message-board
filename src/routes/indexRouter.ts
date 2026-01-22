import { Router } from "express";
import { addNewItem, index, newItem } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", index)
indexRouter.get("/new", newItem)
indexRouter.post("/new", addNewItem)

export default indexRouter 
