import { Request, Response } from "express"


const home = (req: Request, res: Response) => {
    res.send("Home")
}

const newItem = (req: Request, res: Response) => {
    res.send("new")
}

export { home, newItem }
