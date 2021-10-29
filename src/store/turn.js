import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const RECRUIT = "recruit";
const ACTIVITIES = "activities";
const REPORT = "report";
const FINISHED = "finished";

const store = new Vuex.Store({
    state: {
        turnOver: false,
        stage: FINISHED,
        report: {}
    }
});



export default {
    RECRUIT, ACTIVITIES, REPORT, FINISHED,

    isTurnOver: () => store.state.turnOver,

    stage: () => store.state.stage,
    report: () => store.state.report,

    turnOver() {
        store.state.turnOver = true;
        store.state.stage = RECRUIT;
    },

    newTurn() {
        store.state.turnOver = false;
        this.clearReport();
    },

    nextStage() {
        if (store.state.stage === RECRUIT) {
            store.state.stage = ACTIVITIES;
        } else if (store.state.stage === ACTIVITIES) {
            store.state.stage = REPORT;
        } else {
            store.state.stage = FINISHED;
        }
    },

    clearReport() {
        window.console.log("clear report");
        store.state.report = {};
    },

    addReport(item, diff, total) {
        const report = store.state.report;
        if (report[item]) {
            report[item].diff = report[item].diff + diff;
            report[item].total = total;
        } else {
            report[item] = {
                diff,
                total
            }
        }
        console.log("report item: " + item);
        console.log(report[item]);

    }
}