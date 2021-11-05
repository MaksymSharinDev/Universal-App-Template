import * as express from 'express'
import { Express, NextFunction, Response, Request } from 'express'
import { Server } from 'http'

import * as compress from 'compression'
import * as helmet from 'helmet'
import * as hpp from 'hpp'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as RateLimit from 'express-rate-limit'
import router from "./routes/router"



/**
 * Abstraction around the raw Express.js server and Nodes' HTTP server.
 * Defines HTTP request mappings, basic as well as request-mapping-specific
 * middleware chains for application logic, config and everything else.
 */
export class ExpressServer {
    private server?: Express
    private httpServer?: Server

    constructor() {}

    public async setup(port: number) {
        const server = express()
        this.setupStandardMiddlewares(server)
        this.setupSecurityMiddlewares(server)
        //this.configureFrontendEndpoints(server)
        this.configureApiEndpoints(server)


        this.httpServer = this.listen(server, port)
        this.server = server
        return this.server
    }

    public listen(server: Express, port: number) {
        console.info(`Starting server on port ${port}`)
        return server.listen(port)
    }

    public kill() {
        if (this.httpServer) this.httpServer.close()
    }

    private setupStandardMiddlewares(server: Express) {
        server.use(bodyParser.json())
        server.use(cookieParser())
        server.use(compress())

        const baseRateLimitingOptions = {
            windowMs: 15 * 60 * 1000, // 15 min in ms
            max: 1000,
            message: 'Our API is rate limited to a maximum of 1000 requests per 15 minutes, please lower your request rate'
        }
        server.use('/api/', new RateLimit(baseRateLimitingOptions))
    }

    private setupSecurityMiddlewares(server: Express) {
        server.use(hpp())
        server.use(helmet())
        server.use(helmet.referrerPolicy({ policy: 'same-origin' }))
        server.use(helmet.noCache())
        server.use(
            helmet.contentSecurityPolicy({
                directives: {
                    defaultSrc: ["'self'"],
                    styleSrc: ["'unsafe-inline'"],
                    scriptSrc: ["'unsafe-inline'", "'self'"]
                }
            })
        )
    }

    private configureFrontendEndpoints(server: Express) {
        const setFrontendsOrigin = cors({ origin: false })
        //TODO set whitelist ( frontend static server HOST )
    }

    private configureApiEndpoints(server: Express) {

        server.use('api/', router )
    }



}
