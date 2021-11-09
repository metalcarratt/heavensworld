import Vue from 'vue';
import Vuex from 'vuex';
import resources from '@/script/resources.js';

Vue.use(Vuex);

const NO_MODAL = 0;
const MINE_STONES_MODAL = 1;
const GATHER_PLANTS_MODAL = 2;
const FARM_HERBS_MODAL = 3;
const CHOOSE_HERB_MODAL = 4;

const store = new Vuex.Store({
    state: {
        showModal: NO_MODAL
    }
});


export default {
    MINE_STONES_MODAL,
    GATHER_PLANTS_MODAL,
    FARM_HERBS_MODAL,
    CHOOSE_HERB_MODAL,

    show(modalName) {
        store.state.showModal = modalName;
    },
    is(modalName) {
        return store.state.showModal === modalName;
    },
    showing() {
        return store.state.showModal !== NO_MODAL;
    },
    close() {
        store.state.showModal = NO_MODAL;
    },
    activity() {
        switch (store.state.showModal) {
            case MINE_STONES_MODAL:
                return resources.STONES;
            case GATHER_PLANTS_MODAL:
                return resources.PLANTS;
            case FARM_HERBS_MODAL:
            case CHOOSE_HERB_MODAL:
                return resources.HERBS;
            default:
                return undefined;
        }
    }
}