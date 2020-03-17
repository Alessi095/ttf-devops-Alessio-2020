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
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const config = __importStar(require("../../server-config.json"));
const colors_1 = require("../../../commons/src/test-data/colors");
chai_1.default.config.includeStack = true;
const should = chai_1.default.should();
chai_1.default.use(chai_http_1.default);
//TODO
describe('REST API test suite description', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);
    colors_1.hex2rgbTestData.forEach((test) => {
        it(`test case description`, (done) => {
            chai_1.default.request(url)
                .get('/')
                .query(`color=${JSON.stringify(test.hexValue)}`)
                .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(200);
                res.body.should.deep.equal(test.rgbValue);
                done();
            });
        });
    });
});
//# sourceMappingURL=HttpController.componentTest.js.map