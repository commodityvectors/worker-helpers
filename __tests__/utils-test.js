(() => {
    'use strict';

    jest.dontMock('../modules/utils');

    describe('clone', () => {
        beforeEach(() => {
            require('../modules/utils');
        })

        it('clones an object', function() {
            var object = {a: 1, b: 2};
            var clone = utils.copy(object);
            clone.a = 2;

            expect(clone).not.toBe(object);
            expect(object.a).not.toBe(2);
        });
    });
})();
