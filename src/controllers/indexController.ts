import { Request, Response } from "express"
import { addMessageAsync, getAllMessagesAsync } from "../repos/messageRepo.js"
import { NewItemResponse } from "../models/newItemResponse.js";
import { Message } from "../models/message.js";
import { messageResponseToMessage } from "../helpers/messageResponseToMessage.js";


const index = async (req: Request, res: Response) => {

    const messages = await getAllMessagesAsync();
    res.render("index", { messages })
}

const newItem = async (req: Request, res: Response) => {
    res.render("newItem")
}

const addNewItem = async (req: Request, res: Response) => {
    const messageResponse: NewItemResponse = req.body;

    try {
        const message = messageResponseToMessage(messageResponse)
        await addMessageAsync(message);
        res.redirect("/");
    }
    catch {
        res.send("Server error")
    }

}

export { index, newItem, addNewItem }
