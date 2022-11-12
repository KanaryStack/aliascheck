import { IUsernameCheck, Platform } from "../platform";
import { logger } from "../../app";
import { TTScraper } from "tiktok-scraper-ts";


export class TikTokPlatform extends Platform{
    constructor(){
        super("tiktok")
    }
    async checkUsernameExists(username: string): Promise<IUsernameCheck | undefined> {
      
        let check:IUsernameCheck | undefined;

        try{
            const TikTokScraper = new TTScraper();   
            const response = await TikTokScraper.user(username);
            logger.info(response)
            check={ exists: response!=null, platform:this.name }
            logger.info("TikTok username %s was found", username);
        }catch(error){
            logger.error(error);
            check={ exists: false, platform:this.name }

        }
        return check;
    }

}