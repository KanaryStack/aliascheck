import { TwitterApi } from "twitter-api-v2";
import { Platform,IUsernameCheck } from "../platform";
import { logger } from "../../app";


const TWITTER_BEARER_TOKEN:string|undefined=process.env.TWITTER_BEARER_TOKEN
export class TwitterPlatform extends Platform{
    constructor(){
        super("twitter")
    }


    async checkUsernameExists(username: string): Promise<IUsernameCheck | undefined>{
        
        let check :IUsernameCheck|undefined
        try {
            logger.info("Initializing twitter client")
            // Instantiate with desired auth type (here's Bearer v2 auth)
            const twitterClient = new TwitterApi(TWITTER_BEARER_TOKEN??"");
    
            // Tell typescript it's a readonly app
            const readOnlyClient = twitterClient.readOnly;
    
            logger.info("Checking existance of alias")
            // Play with the built in methods
            const user = async (username:string)=>{
            const {data}= await readOnlyClient.v1.searchUsers(username)
    
            return data
            };
    
            //search twitter for existance of the username
            const result=await user(username);
        
            logger.info("returning results")
            check={ exists:result.length>0,platform:this.name }
            
        } catch (error) {
            logger.error(error)
        }

        return  check
    }
}


