import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        inspiration: '',
        disciples: [],
        fame: 5,
        resources: {
            stones: 0
        }
    }
});

export default {
    fame: () => store.state.fame,
    disciples: () => store.state.disciples,
    stones: () => store.state.resources.stones,

    setInspiration(inspiration) {
        store.state.inspiration = inspiration;
    },
    fameUp(increment) {
        store.state.fame = store.state.fame + increment;
    },
    addDisciple(disciple) {
        store.state.disciples.push(disciple);
    },
    addStones(stones) {
        store.state.resources.stones = store.state.resources.stones + stones;
    }
}