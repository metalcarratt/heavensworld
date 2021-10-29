<template>
    <div :class="['profile', hoverable ? 'hoverable' : '']">
        <img :src="'images/' + disciple.image" />
        <img :src="jobIcon" v-if="jobIcon" class="job" />
        <label>{{ disciple.name }}</label>
        <span v-if="!hideJob">{{ disciple.job }}</span>
        <span class="role">{{ role }}</span>
    </div>
</template>

<script>
import resources from '@/script/resources.js';

export default {
    props: [ 'disciple', 'hoverable', 'hideJob', 'role' ],
    computed: {
        jobIcon() {
            const activity = this.disciple.activity;
            if (activity) {
                if (activity.activity === resources.STONES) {
                    return "images/icon_mining.png";
                } else if (activity.activity === resources.PLANTS) {
                    return "images/icon_gathering.png";
                } else if (activity.activity === resources.HERBS) {
                    return "images/icon_farming.jpg";
                }
            }
            return "";
        }
    }
}
</script>