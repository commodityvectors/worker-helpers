# Web Worker Helpers
[![Build Status](https://travis-ci.org/grillorafael/worker-helpers.svg?branch=master)](https://travis-ci.org/grillorafael/worker-helpers)

## Modules

### http
The idea is to provide a basic usage of HTTP request to use inside WebWorkers so you don't have to code it in a raw way every time

### utils
Provide a few Object handy methods

#### Copy
Provide a way to deep clone your objects
```JS
importScripts('modules/utils.js');
var array = [{a: 1}, {a: 2}];
const copy = utils.copy(array);
```

#### getProperty
Provides a handy way to fetch an object property by a given path
```JS
importScripts('modules/utils.js');
var array = [{a: 1}, {a: { b: 1 }}];
var object = {
    c: {
        d: 5,
        j: {
            k: 1
        }
    }
}
const value = utils.getProperty(object, 'c.j.k'); // 1
const arrayValue = utils.getProperty(object, '0.a'); // 1 it works on arrays as well
```

#### groupBy
Group an array of objects by a given key
```JS
importScripts('modules/utils.js');
var array = [{type: 'a', value: 1}, {type: 'a', value:2}];
utils.groupBy(array, 'type'); // { a: [{type: 'a', value: 1}, {type: 'a', value:2}] }
```
