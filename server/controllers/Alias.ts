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

        //add all results to an array to run them in parallel
        const requests=[];
        if (process.env.TWITTER_BEARER_TOKEN) requests.push(Alias.twitter(username))
        if (process.env.YOUTUBE_API_KEY) requests.push(Alias.youtube(username))

       const platforms= (await Promise.allSettled(requests))
                            .filter((x): x is PromiseFulfilledResult<IUsernameCheck|undefined>=>x.status=='fulfilled')
                            .map(x=>x.value)    
                            .filter(f=>f) 
        res.json({
            "username": username,
            "platforms": platforms
        })

    }
    public static async twitter(username: string | undefined): Promise<IUsernameCheck|undefined>{
        const client=new TwitterPlatform()

        return await client.checkUsernameExists(username??"")
    }
    public static async youtube(username: string | undefined): Promise<IUsernameCheck | undefined>{

        const client=new YoutubePlatform()

        return await client.checkUsernameExists(username??"")
    }

}

export default Alias;