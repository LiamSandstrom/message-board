import { Message } from "../models/message.js"
import { NewItemResponse } from "../models/newItemResponse.js"

const messageResponseToMessage = (response: NewItemResponse) => {
    const newMessage: Message = {
        text: response.messageText,
        user: response.name,
        added: new Date().toLocaleDateString()
    }

    return newMessage;
}

export { messageResponseToMessage }
