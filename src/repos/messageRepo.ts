import { Message } from "../models/message.js"

const messages: Message[] = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date().toLocaleDateString()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date().toLocaleDateString()
    }
];

const getAllMessagesAsync = async () => {
    return messages;
}

const addMessageAsync = async (message: Message) => {
    messages.push(message)
}

export { getAllMessagesAsync, addMessageAsync }
