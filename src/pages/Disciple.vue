<template>
    <div class="page yellow">
        <heading />
        <message>
            <span style="display: inline-block">
                <DiscipleProfile :disciple="disciple" />
            </span>
            <span style="display: inline-block">
                <p>Gender: {{ disciple.gender }}</p>
                <p v-if="isMining">Currently mining for spirit stones</p>
                <p>Mining exp: {{ disciple.exp.mining }}</p>
                <p>Herb exp: {{ disciple.exp.herbs }}</p>
            </span>
        </message>

        <div class="buttons">
            <img-btn src="svg/mountains.png" @click.native="$emit('changePage', 'Mountain')" label="Hall" />
        </div>
    </div>
</template>

<script>
import pageStore from '@/store/page.js';
import DiscipleProfile from '@/components/DiscipleProfile.vue';

export default {
    components: { DiscipleProfile },
    computed: {
        disciple() {
            return pageStore.viewDisciple();
        },
        isMining() {
            return this.disciple.isMining();
        }
    }
}
</script>