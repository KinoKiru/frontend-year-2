import {Request, Response} from "express";

export class Router {
    public route(app: any): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).json(
                    {
                        naam: "klote",
                        zaasje: "nbala",
                        weer: ["laag", "sasa"]
                    }
                );
            });
        app.route('/:name')
            .get((req: Request, res: Response) => {
                res.send(`big hella ${req.params.name} mah dude`);
            })
    }
}