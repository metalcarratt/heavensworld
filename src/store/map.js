import Vue from 'vue';
import Vuex from 'vuex';
import buildMap from '@/script/buildMap.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        map: buildMap.initialMap,
        stones: buildMap.initialStones,
        plants: buildMap.initialPlants,
        soil: buildMap.initialSoil,
        places: buildMap.initialPlaces,
        activity: buildMap.initialActivity
    }
});

export default {
    map: () => store.state.map,
    stones: () => store.state.stones,
    plants: () => store.state.plants,
    soil: () => store.state.soil,
    places: () => store.state.places,
    activity: () => {
        // console.log("mapStore#activity");
        return store.state.activity;
    },

    setActivityAt(row, cell, disciple, activity) {
        Vue.set(store.state.activity[row], cell, {
            activity,
            disciple
        });
    },
    removeActivityAt(row, cell) {
        Vue.set(store.state.activity[row], cell, null);
    },
    removePlantsAt(row, cell) {
        Vue.set(store.state.plants[row], cell, 0);
    }
}