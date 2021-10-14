import dotenv from 'dotenv';
dotenv.config();
import { config } from '../config/Constants';
import mongoose from 'mongoose';


export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            
            await mongoose.connect(config.MONGO_CONNECTION_STRING);
        
        } catch (e) {
            console.error(e); 
            process.exit();
        }
    } 
}