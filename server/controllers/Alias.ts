import { Request, Response } from "express";
import {TwitterPlatform} from '../platforms/twitter/twitter'

class Alias{
    
    public static async index(req: Request,res: Response): Promise<void>{

        const client=new TwitterPlatform()

        const username:string|undefined=req.query.username?.toString();

        if(username==undefined){
            res.json({
                error:"missing field",
                description:"The parameter username is missing."
            })
        }

        const twitterResponse=await client.checkUsernameExists(username??"")


        res.json({
            username:username,
            platforms:[{
                platform:twitterResponse.platform,
                exists:twitterResponse.exists           
            }]
        })
    }
}

export default Alias;