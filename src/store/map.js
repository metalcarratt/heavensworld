import Vue from 'vue';
import Vuex from 'vuex';
import buildMap from '@/script/buildMap.js';

Vue.use(Vuex);

const map = buildMap.createMap();

const store = new Vuex.Store({
    state: {
        map,
        fog: buildMap.initialFog(map),
        character: {
            ci: -1,
            ri: -1,
            moves: 10
        }
    }
});

export default {
    map: () => store.state.map,
    width: () => store.state.map[0].length,
    height: () => store.state.map.length,
    fog: () => store.state.fog,
    character: () => store.state.character,
    movableLocations() {
        const ci = store.state.character.ci;
        const ri = store.state.character.ri;
        const locations = [
            {ci: ci - 1, ri: ri - 1},
            {ci: ci - 1, ri},
            {ci: ci - 1, ri: ri + 1},
            {ci, ri: ri - 1},
            {ci, ri: ri + 1},
            {ci: ci + 1, ri: ri -1},
            {ci: ci + 1, ri},
            {ci: ci + 1, ri: ri + 1}
        ];
        // this.clearFog(locations);
        return locations;
    },

    clearFog(locations) {
        const fog = this.fog();
        locations.forEach(location => {
            // console.log(location);  
            if (fog[location.ri] && fog[location.ri][location.ci] == 1) {
                fog[location.ri][location.ci] = 0;
            }
        });
    },

    find(rule) {
        for (let r = 0; r < this.map().length; r++) {
            for (let c = 0; c < this.map()[r].length; c++) {
                const cell = this.map()[r][c];
                if (rule(cell)) {
                    return {r, c};
                }
            }
        }
    },

    getActivityAt(row, cell) {
        return this.map()[row] ? this.map()[row][cell] : null;
    },
    setActivityAt(row, cell, disciple, activity) {
        Vue.set(this.map()[row][cell], 'activity', activity);
        Vue.set(this.map()[row][cell], 'disciple', disciple);
    },
    removeActivityAt(row, cell) {
        Vue.set(this.map()[row][cell], 'activity', null);
        Vue.set(this.map()[row][cell], 'disciple', null);
    },
    removePlantsAt(row, cell) {
        Vue.set(this.map()[row][cell], 'plants', null);
    },
    getDiscipleAt(row, cell) {
        return this.map()[row] ? this.map()[row][cell].disciple : null;
    },
    moveCharacter(ri, ci) {
        store.state.character.ri = ri;
        store.state.character.ci = ci;
        store.state.character.moves = store.state.character.moves - 1;
        const locations = this.movableLocations();
        this.clearFog(locations);
    },
    resetCharacter() {
        store.state.character.moves = 10;
    }
}