(function () {
    'use strict';

    function rename(obj, fn, isDeepParam) {
        var isDeep = false || isDeepParam;  // makes sure isDeep is defined, for old code that does not have third
        // parameter. The default is shallow - to preserve old code's logic.
        if (typeof fn !== 'function') {
            return obj;
        }

        var res = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if(isDeep && typeof obj[key] === 'object'){ // if we have to do deep renaming, we call recursively
                    // until reach non-object leaves of the tree.
                    obj[key] = rename(obj[key], fn, isDeep);// passing on isDeep. TODO: make isDeep global
                }
                res[fn(key) || key] = obj[key];
            }
        }
        return res;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = rename;
    } else {
        if (typeof define === 'function' && define.amd) {
            define([], function () {
                return rename;
            });
        } else {
            window.rename = rename;
        }
    }
})();