<template>
    <div class="page brown">
        <heading />
        <message>Fame: <strong>{{ fame }}</strong></message>
        <message>Stones: <strong>{{ stones }}</strong></message>
        <button @click="$emit('changePage', 'Mountain')">Back</button>
    </div>
</template>

<script>
import store from '@/store/store.js';

export default {
    computed: {
        fame() {
            return store.fame();
        },
        stones() {
            return store.stones();
        }
    },
}
</script>