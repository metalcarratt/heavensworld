import store from '@/store/store.js';
import turnStore from '@/store/turn.js';
import resources from '@/script/resources.js';

export default {
    processEndTurn() {
        const stage = turnStore.stage();
        if (stage === turnStore.RECRUIT) {
            turnStore.nextStage();
            const recruit = this.recruitFollowers();
            if (recruit) {
                return turnStore.RECRUIT;
            } else {
                return this.processEndTurn();
            }

        } else if (stage === turnStore.ACTIVITIES) {
            turnStore.nextStage();
            this.performActivities();
            return this.processEndTurn();

        } else {
            return turnStore.FINISHED;    
        }
    },

    recruitFollowers() {
        let r = Math.floor(Math.random() * 20);
        return r < store.fame();
    },

    performActivities() {
        store.disciples().forEach(disciple => {
            if (disciple.activity) {
                if (disciple.activity.activity === resources.STONES) {
                    store.addStones(1);
                }
            }
        })
    }
}