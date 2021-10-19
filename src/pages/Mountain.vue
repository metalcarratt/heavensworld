<template>
    <div class="page brown">
        <heading/>
        <message>From a sea of clouds rises a mountain paradise</message>
        <message>Fame: <strong>{{ fame }}</strong></message>
        <h2>Disciples:</h2>
        <span class="disciples">
            <DiscipleProfile 
                v-for="(disciple, index) of disciples"
                :key="index"
                :disciple="disciple"
            />
        </span>
        <button @click="promote">Promote teachings</button>
        <button>Cultivate</button>
        <button>Seek Enlightenment</button>
        <button>Develop techniques</button>
        <button>Travel</button>
    </div>
</template>

<script>
import store from '@/store/store.js';
import DiscipleProfile from '@/components/DiscipleProfile.vue';

export default {
    components: { DiscipleProfile },
    computed: {
        fame() {
            return store.fame();
        },
        disciples() {
            return store.disciples();
        }
    },
    methods: {
        promote() {
            this.$router.push('/promote');
        }
    }
}
</script>