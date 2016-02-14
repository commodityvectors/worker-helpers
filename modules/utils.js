((c) => {
    'use strict';

    var utils = {
        copy: (o) => {
            // Rude but still much faster than most recursive clone methods
            return JSON.parse(JSON.stringify(o));
        }
    }

    c.utils = utils;
    return utils;
})(self || window);
