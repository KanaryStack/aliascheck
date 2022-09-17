import { Request, response, Response } from "express";
import axios, { AxiosError } from "axios";
import { logger } from "../app";
import {TwitterPlatform} from '../platforms/twitter/twitter'
import {YoutubePlatform} from "../platforms/youtube/youtube"
import { Platform, IUsernameCheck } from "../platforms/platform";
import * as dotenv from 'dotenv';

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
        if (process.env.TWITTER_BEARER_TOKEN) platforms.push(await this.twitter(username, req, res))
        if (process.env.YOUTUBE_API_KEY) platforms.push(await Alias.youtube(username, req, res))

        res.json({
            "username": username,
            "platforms": platforms
        })

    }
    public static async twitter(username: string | undefined, req: Request,res: Response): Promise<IUsernameCheck>{
        const client=new TwitterPlatform()

        return await client.checkUsernameExists(username??"")
    }
    public static async youtube(username: string | undefined,req: Request,res: Response): Promise<IUsernameCheck | undefined>{

        const client=new YoutubePlatform()

        return await client.checkUsernameExists(username??"")
    }

}

export default Alias;