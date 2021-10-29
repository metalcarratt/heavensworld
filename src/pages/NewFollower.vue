<template>
    <div class="page yellow">
        <heading />
        <message>Your teaching inspires many. After listening with rapt attention, one young student
            asks to become your personal disciple.
        </message>
        <span class="disciples">
            <DiscipleProfile :disciple="follower" :hideJob="true" />
        </span>
        <message>"Master, my name is {{ follower.name }}. Please accept me as your disciple!"</message>
        <button @click="accept">Accept</button>
        <!-- <template v-if="accepted">
            <h2>Assign a job</h2>
            <message>Disciples can be assigned special tasks. Choose what you want your disciple to
                focus on.</message>
            <choices>
                <choice
                    v-for="(job, index) in jobs"
                    :key="index"
                    :name="job.name"
                    :blurb="job.blurb"
                    @click="chooseJob(job)"
                />
            </choices>
        </template> -->
    </div>
</template>

<script>
import disciple from '@/script/disciple.js';
import store from '@/store/store.js';
import DiscipleProfile from '@/components/DiscipleProfile.vue';

export default {
    components: { DiscipleProfile },
    data() {
        return {
            // accepted: false,
            // jobs: [
            //     {
            //         name: 'Herbalist',
            //         blurb: 'Studies nature to concoct elixers'
            //     },
            //     {
            //         name: 'Miner',
            //         blurb: 'Hunts for spirit stones'
            //     },
            //     {
            //         name: 'Warrior',
            //         blurb: 'Trains in martial arts'
            //     },
            //     {
            //         name: 'Scholar',
            //         blurb: 'Contemplates the universe to unlock its secrets'
            //     }
            // ],
            follower: {}
        }
    },
    mounted() {
        this.follower = disciple.newDisciple();
    },
    methods: {
        accept() {
            // this.accepted = true;
            store.addDisciple(this.follower);
            this.$emit("changePage", "Mountain");
        }
        // chooseJob(job) {
        //     this.follower.job = job.name;
        //     store.addDisciple(this.follower);
        //     this.$emit("changePage", "Mountain");
        // }
    }
}
</script>