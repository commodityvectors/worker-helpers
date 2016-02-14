self.addEventListener('message', (e) => {
    'use strict';

    importScripts('../../modules/http.js');

    const URL = '//jsonplaceholder.typicode.com/posts';

    http.post(URL, e.data).then((response) => {
        self.postMessage(response);
    });
}, false);
