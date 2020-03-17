import chai from 'chai';
import {convert} from './Service';
import {hex2rgbTestData} from '../../../commons/src/test-data/colors';


chai.config.includeStack = true;
const should = chai.should();

//TODO
describe('test suite description', () => {
    hex2rgbTestData.forEach((test) => {
        it(`test case description`, () => {
            convert(test.hexValue).should.deep.equal(test.rgbValue);
        });
    });
});
