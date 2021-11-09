<template>
    <div class="page yellow">
        <heading />
        <message>Your teaching inspires many. After listening with rapt attention, one young student
            asks to become your personal disciple.
        </message>
        <span class="disciples">
            <DiscipleProfile :disciple="follower" :hideJob="true" v-if="follower" />
        </span>
        <message>"Master, my name is {{ follower.name }}. Please accept me as your disciple!"</message>
        <button @click="accept">Accept</button>
    </div>
</template>

<script>
import disciple from '@/heavensworld/disciple/disciple.js';
import store from '@/store/store.js';
import DiscipleProfile from '@/components/DiscipleProfile.vue';

export default {
    components: { DiscipleProfile },
    data() {
        return {
            follower: ''
        }
    },
    mounted() {
        this.follower = disciple.createDisciple();
    },
    methods: {
        accept() {
            store.addDisciple(this.follower);
            this.$emit("changePage", "Mountain");
        }
    }
}
</script>