import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const RECRUIT = "recruit";
const FINISHED = "finished";

const store = new Vuex.Store({
    state: {
        turnOver: false,
        stage: FINISHED
    }
});



export default {
    RECRUIT, FINISHED,

    isTurnOver: () => store.state.turnOver,

    stage: () => store.state.stage,

    turnOver() {
        store.state.turnOver = true;
        store.state.stage = RECRUIT;
    },

    newTurn() {
        store.state.turnOver = false;
    },

    nextStage() {
        if (store.state.stage === RECRUIT) {
            store.state.stage = FINISHED;
        }
    }
}