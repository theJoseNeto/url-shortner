import { Schema, model } from 'mongoose';

const URL = new Schema({
    hash: { type: String, required: true },
    origin_URL: { type: String, required: true },
    short_url: { type: String, required: true },
});

export const URL_model = model('URL', URL);

