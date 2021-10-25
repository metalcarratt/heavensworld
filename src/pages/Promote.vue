<template>
    <div class="page yellow">
        <heading/>
        <message>You step out into the world, ready to impart wisdom to the ignorant. Where will you go?</message>
        <choices v-if="!chosen">
            <choice name="Liyue" blurb="Town of about 5,000 people" @click="choose('Liyue')"/>
        </choices>
        <template v-if="chosen">
            <h2>Success!</h2>
            <message>The people of {{ destination }} listen rapt to your message.</message>
            <message>Fame: <strong>+{{ fameUp }}</strong> >> {{ fame }}</message>
            <button @click="goBack">Continue</button>
        </template>
    </div>
</template>

<script>
import store from '@/store/store.js';

export default {
    data() {
        return {
            destination: '',
            fameUp: 0
        }
    },
    computed: {
        chosen() {
            return this.destination !== '';
        },
        fame() {
            return store.fame();
        }
    },
    methods: {
        choose(choice) {
            this.destination = choice;
            this.fameUp += (Math.floor(Math.random() * 3) + 2);
            store.fameUp(this.fameUp);
        },
        goBack() {
            let r = Math.floor(Math.random() * 20);
            if (r < store.fame()) {
                this.$router.push("/follower");
            } else {
                this.$router.push("/mountain");
            }
        }
    }
}
</script>