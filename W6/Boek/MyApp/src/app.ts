import express from 'express';
import bodyParser from "body-parser";
import {Router} from "./router";

class App {
    public app: express.Application
    public router: Router = new Router()

    constructor() {
        this.app = express();
        this.config();
        this.router.route(this.app);
    }

    private config(): void {
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers",
                "Origin, X-Requested-With");
            res.setHeader("Access-Control-Allow_Methods", 'GET, POST, OPTIONS, PUT')
            next();
        })
        //voor application/json type post data
        this.app.use(bodyParser.json())
        // voor application/x-www-from-urlencoded port data
        this.app.use(bodyParser.urlencoded({extended: false}))
    }
}
export  default new App().app;