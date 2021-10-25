import mapStore from '@/store/map.js';

export default {
    startActivity(row, cell, disciple, activity) {
        if (disciple.activity) {
            this.removeWorkerAt(disciple.activity.row, disciple.activity.cell);
        }
        disciple.activity = {
            row,
            cell,
            activity
        };
        mapStore.setActivityAt(row, cell, disciple, activity);
    },
    hasWorker: (row, cell) => {
        console.log("working#hasWorker");
        return row && mapStore.activity()[row][cell] != null
    },
    getWorker(row, cell) {
        return mapStore.activity()[row][cell].disciple;
    },
    removeWorkerAt(row, cell) {
        console.log(`working#removeWorkerAt ${row}, ${cell}`);
        const activity = mapStore.activity()[row][cell];
        mapStore.removeActivityAt(row, cell);
        activity.disciple.activity = null;
    }
}