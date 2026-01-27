import { Request, Response } from "express"
import { NewItemResponse } from "../models/newItemResponse.js";
import { messageResponseToMessage } from "../helpers/messageResponseToMessage.js";
import { addMessageAsync, getAllMessagesAsync } from "../db/queries.js";
import { body, matchedData, validationResult } from "express-validator";


const validateMessage = [
    body("name").trim()
        .isLength({ min: 1, max: 20 }).withMessage(`First name must be between 1-20 characters.`),
    body("messageText").trim()
        .isLength({ min: 3, max: 150 }).withMessage(`Message must be between 3-150 characters.`),
];

const index = async (req: Request, res: Response) => {

    const messages = await getAllMessagesAsync();
    res.render("index", { messages })
}

const newItem = async (req: Request, res: Response) => {
    res.render("newItem")
}

const addNewItem = [
    ...validateMessage,
    async (req: Request, res: Response) => {
        const messageResponse: NewItemResponse = req.body;

        const errors = validationResult(req);
        const { name, messageText } = matchedData(req);
        if (!errors.isEmpty()) {
            console.log(req.body.name, req.body.messageText)
            return res.status(400).render("newItem", {
                name: name,
                messageText: messageText,
                errors: errors.array()
            });
        }

        try {
            const message = messageResponseToMessage(messageResponse)
            await addMessageAsync(message);
            res.redirect("/");
        }
        catch {
            res.send("Server error")
        }
    }]

export { index, newItem, addNewItem }
