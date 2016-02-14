(() => {
    'use strict';

    jest.dontMock('../modules/utils');

    beforeEach(() => {
        require('../modules/utils');
    });

    describe('clone', () => {
        it('clones an object', function() {
            let object = {
                a: 1,
                b: 2
            };
            let clone = utils.copy(object);
            clone.a = 2;

            expect(clone).not.toBe(object);
            expect(object.a).not.toBe(2);
        });
    });

    describe('groupBy', () => {
        let elements;
        beforeEach(() => {
            elements = [{
                category: 'Test',
                name: 'Suit'
            }, {
                category: 'Test',
                name: 'Suit 2'
            }, {
                category: 'Javascript',
                name: 'Suit 3'
            }];
        });

        function assertGroup(grouped) {
            expect(Object.keys(grouped)).toEqual(['Test', 'Javascript']);
            expect(grouped.Test.length).toEqual(2);
            expect(grouped.Javascript.length).toEqual(1);
            expect(grouped.Javascript).toEqual([elements[2]]);
        }

        it('groups by given property name', () => {
            assertGroup(utils.groupBy(elements, 'category'));
        });

        it('groups by function that returns key', () => {
            assertGroup(utils.groupBy(elements, (e) => {
                return e.category;
            }));
        });
    });

    describe('getProperty', () => {
        let object;

        beforeEach(() => {
            object = {
                a: {
                    b: 2,
                    c: {
                        d: 4
                    }
                },
                e: 10
            };
        });

        it('fetchs an object property by given path', () => {
            expect(utils.getProperty(object, 'a')).toBe(object.a);
            expect(utils.getProperty(object, 'a.b')).toBe(2);
            expect(utils.getProperty(object, 'a.c.d')).toBe(4);
        });

        it('returns undefined if invalid property', () => {
            expect(utils.getProperty(object, 'd.e.f.g')).toBe(undefined);
        });

        it('works on arrays as well', () => {
            object = [{
                a: 1
            }];
            expect(utils.getProperty(object, '0.a')).toBe(1);
        });
    });
})();
