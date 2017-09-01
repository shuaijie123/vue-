import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


import classify from './data/classify.js';
import shoppmll from './data/shoppmall.js';
import dataent from './data/dataent.js';
import crent from './data/xiangqingniao.js'


let mock = new MockAdapter(axios);





mock.onGet('/crent').reply(() => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve([200, crent])
        }, 1000);
    })
});


mock.onGet('/dataent').reply(() => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve([200, dataent])
        }, 1000);
    })
});



mock.onGet('/classify').reply(() => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve([200, classify])
        }, 1000);
    })
});



mock.onGet('/shoppmll').reply(() => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve([200, shoppmll])
        }, 1000);
    })
});