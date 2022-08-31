import { Request, Response } from "express";

class Alias{
    public static index(req: Request,res: Response): void{
        res.json({
            placeholder: "This is a placeholder"
        })
    }
}

export default Alias;