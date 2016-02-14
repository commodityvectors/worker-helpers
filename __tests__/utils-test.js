(() => {
    'use strict';

    jest.dontMock('../modules/utils');

    describe('clone', () => {
        it('clones an object', function() {
            var u = require('../modules/utils');
            var object = {a: 1, b: 2};
            var clone = u.utils.copy(object);
            clone.a = 2;

            expect(clone).not.toBe(object);
            expect(object.a).not.toBe(2);
        });
    });
})();
