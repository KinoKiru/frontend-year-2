"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.prototype.route = function (app) {
        app.route('/')
            .get(function (req, res) {
            res.status(200).send('Welkom bij Mijn App');
        });
    };
    return Router;
}());
exports.Router = Router;
//# sourceMappingURL=index.js.map