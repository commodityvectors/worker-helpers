((c) => {
    'use strict';

    function encodeParams(obj) {
        return Object.keys(obj || {}).map((p) => encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])).join('&');
    }

    function parseURLParams(url, params) {
        params = params || {};

        var unusedParams = {};
        return {
            newUrl: Object.keys(params).reduce((currentUrl, param) => {
                var regx = new RegExp(`:${param}`, 'g');
                if(!regx.test(currentUrl)) {
                    unusedParams[param] = params[param];
                }
                return currentUrl.replace(regx, params[param]);
            }, url),
            params: unusedParams
        }
    }

    var http = {
        run(opts) {
            return new Promise((resolve, reject) => {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = () => {
                    if (xmlHttp.readyState === 4) {
                        if(xmlHttp.status === 200) {
                            resolve(JSON.parse(xmlHttp.responseText));
                        }
                        else {
                            reject({
                                status: xmlHttp.status,
                                data: xmlHttp.responseText
                            });
                        }
                    }
                };
                xmlHttp.open(opts.method, opts.url, true);
                if(opts.method === 'POST') {
                    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                }
                xmlHttp.send(opts.data ? JSON.stringify(opts.data) : '');
            });
        },
        get(url, params) {
            var parsedParams = parseURLParams(url, params);
            url = parsedParams.newUrl;
            params = encodeParams(parsedParams.params);
            return this.run({
                method: 'GET',
                url: `${url}?${params}`,
            });
        },
        post(url, params) {
            var parsedParams = parseURLParams(url, params);
            url = parsedParams.newUrl;
            params = encodeParams(parsedParams.params);
            return this.run({
                method: 'GET',
                url: url,
                data: params
            });
        }
    };

    c.http = http;
    return http;
})(exports || self || window);
