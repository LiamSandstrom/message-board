import { Request, Response } from "express"


const index = (req: Request, res: Response) => {
    res.render("index")
}

const newItem = (req: Request, res: Response) => {
    res.render("newItem")
}

export { index, newItem }
