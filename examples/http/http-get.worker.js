self.addEventListener('message', (e) => {
    'use strict';

    importScripts('../../modules/http.js');

    const URL = '//jsonplaceholder.typicode.com/photos';

    http.get(URL).then((response) => {
        self.postMessage({
            photos: response
        })
    });
}, false);
