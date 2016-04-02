import * as util from '../src/util';

describe('util tests', () => {
    describe('identity()', () => {
        it('returns the argument', () => {
            let arg = {};
            expect(util.identity(arg)).to.equal(arg);
        });
    });
});