import axios  from "axios";
import { Platform,IUsernameCheck } from "../platform";
import * as dotenv from 'dotenv';
import { logger } from "../../app";

dotenv.config();

const TWITTER_BEARER_TOKEN:string|undefined=process.env.TWITTER_BEARER_TOKEN
type YoutubeResponse = {
    "id": string,
    "kind": string,
    "etag": string,
    "pageInfo": {
        "totalResults": number,
        "resultsPerPage": number
    },
    "contentDetails": {
      "relatedPlaylists": {
        "likes": string,
        "favorites": string,
        "uploads": string,
        "watchHistory": string,
        "watchLater": string
      },
      "googlePlusUserId": string
    },
}
export class YoutubePlatform extends Platform{
    constructor(){
        super("youtube")
    }
    async checkUsernameExists(username: string): Promise<IUsernameCheck | undefined> {
        const config = {
            params:{
                part: "contentDetails",
                forUsername: username,
                key: process.env.YOUTUBE_API_KEY
            }
          };
        const url = "https://www.googleapis.com/youtube/v3/channels"
        var check:IUsernameCheck | undefined;

        try{
            const { data, status } = await axios.get<YoutubeResponse>(
                url, config
            )
            check={ exists: data.pageInfo.totalResults > 0, platform:this.name }
            logger.info("Youtube username %s was found", username);
        }catch(error){
            logger.error(error);
        }
        return check;
    }
}


