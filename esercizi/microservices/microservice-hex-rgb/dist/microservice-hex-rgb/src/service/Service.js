"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_convert_1 = __importDefault(require("color-convert"));
//TODO
function convert(color) {
    let converted = color_convert_1.default.hex.rgb(color.hex);
    const convertedColor = {
        red: converted[0],
        green: converted[1],
        blue: converted[2]
    };
    return convertedColor;
}
exports.convert = convert;
//# sourceMappingURL=Service.js.map