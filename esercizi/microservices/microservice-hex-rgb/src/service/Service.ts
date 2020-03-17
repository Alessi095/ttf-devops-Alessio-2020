import colorConverter from 'color-convert';
import {TtfHex,TtfRgb} from '../../../commons/src/model/Color';

//TODO
export function convert(color:TtfHex):TtfRgb  {
    let converted = colorConverter.hex.rgb(color.hex);
    const convertedColor:TtfRgb = {
        red:converted[0],
        green:converted[1],
        blue:converted[2] 
    };
    return  convertedColor;
}
