import { Request, Response } from "express";
import {TwitterPlatform} from '../platforms/twitter/twitter'
import {YoutubePlatform} from "../platforms/youtube/youtube"
import { IUsernameCheck } from "../platforms/platform";

class Alias{
    
    public static async index(req: Request,res: Response): Promise<void>{

        const username:string|undefined=req.query.username?.toString();
        if(username==undefined){
            res.json({
                error:"missing field",
                description:"The parameter username is missing."
            })
        }
        const platforms: (IUsernameCheck | undefined)[] = [];
        if (process.env.TWITTER_BEARER_TOKEN) platforms.push(await this.twitter(username))
        if (process.env.YOUTUBE_API_KEY) platforms.push(await Alias.youtube(username))

        res.json({
            "username": username,
            "platforms": platforms
        })

    }
    public static async twitter(username: string | undefined): Promise<IUsernameCheck>{
        const client=new TwitterPlatform()

        return await client.checkUsernameExists(username??"")
    }
    public static async youtube(username: string | undefined): Promise<IUsernameCheck | undefined>{

        const client=new YoutubePlatform()

        return await client.checkUsernameExists(username??"")
    }

}

export default Alias;