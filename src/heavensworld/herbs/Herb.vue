<template>
    <span class="herb-profile">
        <img :src="image" />
        <label>{{ herb }}</label>
        <span>Quantity: <strong>{{ quantity }}</strong></span>
    </span>
</template>

<script>
import herbs from './herbs.js';

export default {
    props: [ 'herb', 'quantity' ],
    computed: {
        image() {
            return herbs.getImage(this.herb);
        }
    }
}
</script>