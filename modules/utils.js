((c) => {
    'use strict';

    var utils = {
        copy: (o) => {
            // Rude but still much faster than most recursive clone methods
            return JSON.parse(JSON.stringify(o));
        },
        getProperty: (o, p) => {
            const propList = p.split('.');
            const firstProperty = propList.shift();
            return propList.reduce((currentValue, property) => {
                return currentValue ? currentValue[property] : currentValue;
            }, o[firstProperty]);
        }
    }

    c.utils = utils;
    return utils;
})(self || window);
