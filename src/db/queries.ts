import { Message } from "../models/message.js";
import { pool } from "./pool.js"

const getAllMessagesAsync = async () => {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows;
}

const addMessageAsync = async (message: Message) => {
    await pool.query("INSERT INTO messages (message, name, added) VALUES ($1,$2,$3)", [message.text, message.user, message.added])
}

export { getAllMessagesAsync, addMessageAsync }
