import axios  from "axios";
import { Platform,IUsernameCheck } from "../platform";
import { logger } from "../../app";

type YoutubeResponse = {
    "id": string,
    "kind": string,
    "etag": string,
    "pageInfo": {
        "totalResults": number,
        "resultsPerPage": number
    }
}
export class YoutubePlatform extends Platform{
    constructor(){
        super("youtube")
    }
    async checkUsernameExists(username: string): Promise<IUsernameCheck | undefined> {
        const configId = {
            params:{
                part: "id",
                id: username,
                key: process.env.YOUTUBE_API_KEY
            }
        };
        const configUsername = {
            params:{
                part: "id",
                forUsername: username,
                key: process.env.YOUTUBE_API_KEY
            }
        };
        const url = "https://www.googleapis.com/youtube/v3/channels"
        let check:IUsernameCheck | undefined;

        try{
            //check if the channel exists by id
            const { data, status } = await axios.get<YoutubeResponse>(
                url, configId
            )
        
            if (data.pageInfo.totalResults > 0){
                check={ exists: data.pageInfo.totalResults > 0, platform:this.name }
                logger.info("Youtube channel %s was found", username);
            }else{
                //check if the channel exists by username
                const { data, status } = await axios.get<YoutubeResponse>(
                    url, configUsername
                )
                check={ exists: data.pageInfo.totalResults > 0, platform:this.name }
                if (data.pageInfo.totalResults > 0){
                    logger.info("Youtube username %s was found", username);
                }
            }

            if (check.exists == false){
                logger.info("Youtube username %s was not found", username);
            }
        
        }catch(error){
            logger.error(error);
        }
        return check;
    }
}


