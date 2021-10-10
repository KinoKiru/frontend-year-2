"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var router_1 = require("./router");
var App = /** @class */ (function () {
    function App() {
        this.router = new router_1.Router();
        this.app = (0, express_1.default)();
        this.config();
        this.router.route(this.app);
    }
    App.prototype.config = function () {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With");
            res.setHeader("Access-Control-Allow_Methods", 'GET, POST, OPTIONS, PUT');
            next();
        });
        //voor application/json type post data
        this.app.use(body_parser_1.default.json());
        // voor application/x-www-from-urlencoded port data
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map