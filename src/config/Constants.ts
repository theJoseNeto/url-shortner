import dotenv from "dotenv";
dotenv.config();

const API_URL = String(process.env.API_URL);
const MONGO_CONNECTION_STRING = String(process.env.MONGO_CONNECTION_STRING);

export const config = {
    API_URL,
    MONGO_CONNECTION_STRING
    
}
