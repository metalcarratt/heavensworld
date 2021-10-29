import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        viewDisciple: null
    }
});

export default {
    viewDisciple: () => store.state.viewDisciple,
    setViewDisciple(disciple) {
        store.state.viewDisciple = disciple;
    }
}