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
        return mapStore.getDiscipleAt(row, cell);
    },
    getWorker(row, cell) {
        return mapStore.getDiscipleAt(row, cell);
    },
    removeWorkerAt(row, cell) {
        mapStore.getDiscipleAt(row, cell).removeJob();
        mapStore.removeActivityAt(row, cell);
    }
}