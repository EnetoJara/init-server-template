/**
 *                                  Apache License
                               Version 2.0, January 2004
                             http://www.apache.org/licenses/
 
                                 Ernesto Jara Olveda
 */

import compression from "compression";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import { routes } from "./routes/routes";

/**
 * Creates the basic configuration for an express server.
 *
 * @param {string} env - environment in which the app is going to run on.
 * @returns {Application} app - and express basic config.
 */
export function expressConfig (env: string): Application {
    const app: Application = express();

    if (env === "production") {
        app.use(helmet());
        app.use(compression());
    } else {
        app.use(cors());
    }

    app.use("/api", routes());

    return app;
}
