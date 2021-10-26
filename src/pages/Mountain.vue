<template>
    <div class="page brown">
        <heading/>
        <message>From a sea of clouds rises a mountain paradise</message>
        <message>Fame: <strong>{{ fame }}</strong></message>
        <message>Stones: <strong>{{ stones }}</strong></message>
        <button @click="$emit('changePage', 'Map')">Map</button>
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
import turnStore from '@/store/turn.js';
import DiscipleProfile from '@/components/DiscipleProfile.vue';
import turnEnd from '@/script/turnEnd.js';

export default {
    components: { DiscipleProfile },
    computed: {
        fame() {
            return store.fame();
        },
        disciples() {
            return store.disciples();
        },
        stones() {
            return store.stones();
        }
    },
    mounted() {
        if (turnStore.isTurnOver()) {
            const endTurnResult = turnEnd.processEndTurn();
            if (endTurnResult === turnStore.RECRUIT) {
                this.$emit("changePage", "NewFollower");
            } else {
                turnStore.newTurn();
            }
        }
    },
    methods: {
        promote() {
            turnStore.turnOver();
            this.$emit("changePage", "Promote");
        }
    }
}
</script>