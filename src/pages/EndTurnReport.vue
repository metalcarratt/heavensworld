<template>
    <div class="page brown">
        <heading />

        <message v-if="report.mining">
            Mined <strong>{{ report.mining.diff }}</strong> spirit stones. Total: <strong>{{ report.mining.total }}</strong>.
        </message>

        <message v-for="(herbTitle, index) in herbs" :key="index">
            Harvested <strong>{{ report[herbTitle].diff }}</strong> {{ herbTitle.substring(5) }} herbs. Total: <strong>{{ report[herbTitle].total }}</strong>.
        </message>

        <button @click="btnContinue">Continue</button>
    </div>
</template>

<script>
import turnStore from '@/store/turn.js';

export default {
    computed: {
        report() {
            return turnStore.report();
        },
        herbs() {
            return Object.keys(this.report).filter(item => item.startsWith("herb"));
        }
    },
    methods: {
        btnContinue() {
            turnStore.nextStage();
            this.$emit('changePage', 'Mountain');
        }
    }
}
</script>