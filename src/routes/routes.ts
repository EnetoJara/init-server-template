/**
 *                                  Apache License
                               Version 2.0, January 2004
                             http://www.apache.org/licenses/

                                 Ernesto Jara Olveda
 */

import { NextFunction, Request, Response, Router } from "express";
import { logger } from "../utils/logger";

/**
 *
 * @param req
 * @param res
 * @param next
 */
function endPointLogger (req: Request, res: Response, next: NextFunction): void {
        logger.debug(`--------------------------------------------------------`)
        logger.debug(`URL: ${req.url}`);
        logger.debug(`IP: ${req.ip}`);
        logger.debug(`METHOD: ${req.method}`);
        logger.debug(`--------------------------------------------------------`)

        next();
}


/**
 * Place where all the endpoints of our server are defined.
 *
 * @returns {Router} api - Defines all the endpoints of our app.
 */
export function routes (): Router {
    const api: Router = Router ();
    api.route("/v1/login").post(endPointLogger, (req,res) => {

    })
    return api;
}
