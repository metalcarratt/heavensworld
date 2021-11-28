import store from '@/store/store.js';
import turnStore from '@/store/turn.js';
import resources from '@/script/resources.js';
import mapStore from '@/store/map.js';
import herbsUtil from '@/heavensworld/herbs/herbs.js';

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

        } else if (stage === turnStore.REPORT) {
            this.resetVariables();
            return turnStore.REPORT;
        
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
                    this.doMining(disciple);
                } else if (disciple.activity.activity === resources.PLANTS) {
                    this.doGathering(disciple);
                } else if (disciple.activity.activity === resources.HERBS) {
                    this.doFarming(disciple);
                }
            }
        })
    },

    resetVariables() {
        mapStore.resetCharacter();
    },

    doMining(disciple) {
        const addStones = 1;
        store.addStones(addStones);
        disciple.expUp('mining', 1);
        turnStore.addReport('mining', addStones, store.stones());
    },

    doGathering(disciple) {
        // remove plants
        mapStore.removePlantsAt(disciple.activity.row, disciple.activity.cell);
        // remove disciple job
        mapStore.removeActivityAt(disciple.activity.row, disciple.activity.cell);
        disciple.removeJob();
        // choose random plant
        const herb = herbsUtil.acquireRandomHerb();
        // add to herbery
        const addHerbs = 4;
        store.addHerbs(herb, addHerbs);
        // herb exp
        disciple.expUp('herbs', 1);
        turnStore.addReport('herb-' + herb, addHerbs, store.herbs()[herb]);
    },

    doFarming(disciple) {
        let r = Math.floor(Math.random() * 2) + 2;
        const herb = disciple.activity.target;
        store.addHerbs(herb, r);
        turnStore.addReport('herb-' + herb, r, store.getHerb(herb));
        disciple.expUp('herbs', 1);
    }
}