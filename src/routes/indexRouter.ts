import { Router } from "express";
import { home, newItem } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", home)
indexRouter.get("/new", newItem)

export default indexRouter 
