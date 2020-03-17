"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpController_1 = __importDefault(require("./controller/HttpController"));
const express_1 = __importDefault(require("express"));
const config = __importStar(require("../server-config.json"));
class HttpServer {
    constructor() {
        const server = express_1.default();
        server.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', config.cors);
            res.header('Access-Control-Allow-Methods', 'GET');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
        new HttpController_1.default(server);
        server.listen(config.port);
    }
}
new HttpServer();
//# sourceMappingURL=HttpServer.js.map