import createDisciple from './createDisciple.js';
import resources from '@/script/resources.js';
import activityJs from '@/heavensworld/activity/activity.js';

const JOB_NONE = 'NONE';

export default {
    createDisciple() {
        const gender = createDisciple.getGender();
        const name = createDisciple.getName(gender);
        const image = createDisciple.getImage(gender);

        return {
            name,
            gender,
            image,
            exp: {
                mining: 0,
                herbs: 0
            },
            activity: {
                activity: JOB_NONE,
                row: -1,
                cell: -1,
                target: ''
            },

            isMining() {
                return this.activity.activity === resources.STONES;
            },

            getJobIcon() {
                return activityJs.getIcon(this.activity.activity);
            },

            hasJob() {
                return this.activity.activity !== JOB_NONE;
            },

            setJob(row, cell, activity, target) {
                this.activity.activity = activity;
                this.activity.row = row;
                this.activity.cell = cell;
                this.activity.target = target;
            },

            removeJob() {
                this.activity.activity = JOB_NONE;
            },

            getJobLocation() {
                return {
                    row: this.activity.row,
                    cell: this.activity.cell
                }
            },

            expUp(what, howmuch) {
                this.exp[what] = this.exp[what] + howmuch;
            },

            compare(otherDisciple) {
                const aJob = this.activity.activity !== JOB_NONE;
                const bJob = otherDisciple.activity.activity !== JOB_NONE;
                if (aJob && !bJob) {
                    return 1;
                } else if (!aJob && bJob) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
    }
}