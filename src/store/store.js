import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        inspiration: '',
        disciples: [],
        fame: 5
    }
});

export default {
    fame: () => store.state.fame,
    disciples: () => store.state.disciples,

    setInspiration(inspiration) {
        store.state.inspiration = inspiration;
    },
    fameUp(increment) {
        store.state.fame = store.state.fame + increment;
    },
    addDisciple(disciple) {
        store.state.disciples.push(disciple);
    }
}