import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        inspiration: '',
        disciples: [],
        fame: 5,
        resources: {
            stones: 0,
            herbs: {}
        }
    }
});

export default {
    fame: () => store.state.fame,
    disciples: () => store.state.disciples,
    stones: () => store.state.resources.stones,
    herbs: () => store.state.resources.herbs,
    
    hasHerbs() {
        for (let herb in this.herbs()) {
            if (this.herbs()[herb] > 0) return true;
        }
        return false;
    },

    getHerbs() {
        const herbs = [];
        for (let herb in this.herbs()) {
            if (this.herbs()[herb] > 0) herbs.push(herb);
        }
        return herbs;
    },

    getHerb(herb) {
        return this.herbs()[herb];
    },

    setInspiration(inspiration) {
        store.state.inspiration = inspiration;
    },
    fameUp(increment) {
        store.state.fame = store.state.fame + increment;
    },
    addDisciple(disciple) {
        store.state.disciples.push(disciple);
        console.log("add disciple");
        console.log(store.state.disciples);
    },
    addStones(stones) {
        store.state.resources.stones = store.state.resources.stones + stones;
    },
    addHerbs(herbName, amount) {
        if (store.state.resources.herbs[herbName]) {
            store.state.resources.herbs[herbName] += amount;
        } else {
            Vue.set(store.state.resources.herbs, herbName, amount);
        }
    },
    consumeHerb(herb) {
        store.state.resources.herbs[herb] = store.state.resources.herbs[herb] - 1;
    },

    orderedDisciples() {
        return store.state.disciples.sort((a,b) => {
            const aJob = a.activity && a.activity.activity;
            const bJob = b.activity && b.activity.activity
            if (aJob && !bJob) {
                return 1;
            } else if (!aJob && bJob) {
                return -1;
            } else {
                return 0;
            }
        });
    }
}