<template>
    <div class="page brown">
        <heading />
        <message>Fame: <strong>{{ fame }}</strong></message>
        <message>Stones: <strong>{{ stones }}</strong></message>
        
        <div class="buttons">
            <img-btn src="svg/mountains.png" @click.native="$emit('changePage', 'Mountain')" label="Hall" />
        </div>
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