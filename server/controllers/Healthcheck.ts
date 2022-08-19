

import {Request, Response} from 'express';
import {
	StatusCodes,
} from 'http-status-codes';

class Healthcheck {
     public static index (req: Request, res: Response): void {
         res.json({
             "status": StatusCodes.OK
         })
     }
 }
 
 export default Healthcheck;