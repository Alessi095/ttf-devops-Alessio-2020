"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const Service_1 = require("./Service");
const colors_1 = require("../../../commons/src/test-data/colors");
chai_1.default.config.includeStack = true;
const should = chai_1.default.should();
//TODO
describe('test suite description', () => {
    colors_1.hex2rgbTestData.forEach((test) => {
        it(`test case description`, () => {
            Service_1.convert(test.hexValue).should.deep.equal(test.rgbValue);
        });
    });
});
//# sourceMappingURL=Service.test.js.map