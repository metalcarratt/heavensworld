<template>
    <table class="controls">
        <tr>
            <td></td>
            <td class="btn" @click="up">Up</td>
            <td></td>
        </tr>
        <tr>
            <td class="btn" @click="left">Left</td>
            <td></td>
            <td class="btn" @click="right">Right</td>
        </tr>
        <tr>
            <td></td>
            <td class="btn" @click="down">Down</td>
            <td></td>
        </tr>
    </table>
</template>

<script>
import mapviewport from '@/store/mapviewport.js';

export default {
    methods: {
        up: () => mapviewport.up(),
        down: () => mapviewport.down(),
        left: () => mapviewport.left(),
        right: () => mapviewport.right()
    }    
}
</script>