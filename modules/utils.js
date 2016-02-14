((c) => {
    'use strict';

    const utils = {
        copy: (o) => {
            // Rude but still much faster than most recursive clone methods
            return JSON.parse(JSON.stringify(o));
        },
        getProperty: (o, p) => {
            const propList = p.split('.');
            return propList.reduce((currentValue, property) => {
                return currentValue ? currentValue[property] : currentValue;
            }, o);
        },
        groupBy: (c, p) => {
            const getKey = typeof p === 'function' ? p : function(element) {
                return utils.getProperty(element, p);
            };

            return c.reduce((group, element) => {
                const key = getKey(element);
                group[key] = group[key] || [];
                group[key].push(element);
                return group;
            }, {})
        }
    }

    c.utils = utils;
    return utils;
})(self || window);
