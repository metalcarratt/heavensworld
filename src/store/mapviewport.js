import Vue from 'vue';
import Vuex from 'vuex';
import map from './map.js';

Vue.use(Vuex);

const MAX_WIDTH = 7;
const MAX_HEIGHT = 7;

const store = new Vuex.Store({
    state: {
        center: {
            r: 3, c: 3
        }
    }
});

const adjustCenter = function() {
    console.log("adjust center");
    const half_r = parseInt(MAX_WIDTH / 2);
    const half_c = parseInt(MAX_HEIGHT / 2);
    console.log(`center: ${store.state.center.r}, ${store.state.center.c}`);
    console.log(`half: ${half_r}, ${half_c}`);

    if (store.state.center.r === half_r) {
// do nothing
    } else if (store.state.center.r < half_r) {
        store.state.center.r = half_r;
        console.log(`center less than half - Reset center r to ${store.state.center.r}`);

    } else if (store.state.center.r >= (map.height() - half_r)) {
        store.state.center.r = map.height() - half_r - 1;
        console.log(`center more than half to edge - Reset center r to ${store.state.center.r}`);
    }

    if (store.state.center.c === half_c) {
        // do nothing
    } else if (store.state.center.c < half_c) {
        store.state.center.c = half_c;
        console.log(`center less than half - Reset center c to ${store.state.center.c}`);

    } else if (store.state.center.c >= (map.width() - half_c)) {
        store.state.center.c = map.width() - half_c - 1;
        console.log(`center more than half to edge - Reset center c to ${store.state.center.c}`);
    }
    console.log(`center: ${store.state.center.r}, ${store.state.center.c}`);
}

export default {
    at: () => store.state.center,

    start(r, c) {
        store.state.center.r = r;
        store.state.center.c = c;
        adjustCenter();
    },
    up() {
        store.state.center.r = store.state.center.r - 1;
        adjustCenter();
    },
    down() {
        store.state.center.r = store.state.center.r + 1;
        adjustCenter();
    },
    left() {
        store.state.center.c = store.state.center.c - 1;
        adjustCenter();
    },
    right() {
        store.state.center.c = store.state.center.c + 1;
        adjustCenter();
    }
}