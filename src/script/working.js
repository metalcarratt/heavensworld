import mapStore from '@/store/map.js';

export default {
    startActivity(row, cell, disciple, activity, target = undefined) {
        console.log(`startActivity(${row}, ${cell}, ${disciple}, ${activity})`);
        if (disciple.hasJob()) {
            this.removeWorkerAt(disciple.activity.row, disciple.activity.cell);
        }
        disciple.setJob(row, cell, activity, target);
        mapStore.setActivityAt(row, cell, disciple, activity);
    },
    hasWorker: (row, cell) => {
        return row && mapStore.activity()[row][cell] != null
    },
    getWorker(row, cell) {
        return mapStore.activity()[row][cell].disciple;
    },
    removeWorkerAt(row, cell) {
        const activity = mapStore.activity()[row][cell];
        mapStore.removeActivityAt(row, cell);
        activity.disciple.removeJob();
    }
}