<template>
    <div class="page yellow">
        <heading />
        <DiscipleProfile :disciple="disciple" />

        <message>Gender: {{ disciple.gender }}</message>
        <message v-if="isMining">Currently mining for spirit stones</message>
        <message>Mining exp: {{ disciple.exp.mining }}</message>
        <message>Herb exp: {{ disciple.exp.herbs }}</message>

        <button @click="$emit('changePage', 'Mountain')">Back</button>
    </div>
</template>

<script>
import pageStore from '@/store/page.js';
import DiscipleProfile from '@/components/DiscipleProfile.vue';
import resources from '@/script/resources.js';

export default {
    components: { DiscipleProfile },
    computed: {
        disciple() {
            return pageStore.viewDisciple();
        },
        isMining() {
            return this.disciple.activity && this.disciple.activity.activity === resources.STONES;
        }
    }
}
</script>