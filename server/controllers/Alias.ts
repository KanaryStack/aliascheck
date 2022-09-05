import { Request, Response } from "express";
import {TwitterPlatform} from '../platforms/twitter/twitter'

class Alias{
    
    public static async index(req: Request,res: Response): Promise<void>{

        let client=new TwitterPlatform()

        let username:string|undefined=req.query.username?.toString();

        if(username==undefined){
            res.json({
                error:"missing field",
                description:"The parameter username is missing."
            })
        }

        var twitterResponse=await client.checkUsernameExists(username??"")


        res.json({
            username:username,
            platforms:{
                platform:twitterResponse.platform,
                exists:twitterResponse.exists            
            }
        })
    }
}

export default Alias;