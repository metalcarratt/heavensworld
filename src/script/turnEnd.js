import store from '@/store/store.js';
import turnStore from '@/store/turn.js';

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
        } else {
            return turnStore.FINISHED;    
        }
    },

    recruitFollowers() {
        let r = Math.floor(Math.random() * 20);
        return r < store.fame();
    }
}