import { config } from '../config/Constants';
import { Request, Response } from 'express';
import shortId from "shortid";
import { URL_model } from '../database/model/URL';
export class URL_Controller {

    public async shorten(req: Request, res: Response): Promise<any> {
        
        const { origin_URL } = req.body;
        const url = await URL_model.findOne({ origin_URL });
        
        if (!url) {
            const hash = shortId.generate();
            const short_url = `${config.API_URL}/${hash}`;
            
            const new_URL = await URL_model.create({ origin_URL, hash, short_url });
            res.json({ new_URL});
        }
        
        res.json({ url });



    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params;
        const url = await URL_model.findOne({ hash });

        if(url){
            res.redirect(url.origin_URL);
            return;
        }
        
        res.status(400).json({ error: 'url not found' });

    }
}