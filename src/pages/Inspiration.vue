<template>
    <div class="page blue">
        <heading />
        <message>Twenty years on a mountain, isolated from the world. Seeking inspiration from nature and contemplating
            the mysteries of the universe. After all this time, you have finally grapsed an intial understanding of...</message>
        <choices>
            <choice
                v-for="(inspiration, index) in inspirations"
                :key="index"
                :name="inspiration.name"
                :blurb="inspiration.blurb"
                @click="chooseInspiration(inspiration.name)"
            />
        </choices>
    </div>
</template>

<script>
import store from '@/store/store.js';

export default {
    data() {
        return {
            inspirations: [
                {
                    name: 'Harmony',
                    blurb: 'Achieving balance between all things'
                },
                {
                    name: 'Righteousness',
                    blurb: 'Seeking a life of absolute integrity'
                },
                {
                    name: 'Integrity',
                    blurb: ''
                },
                {
                    name: 'Passion',
                    blurb: 'Life burns like a flame, fierce and fast'
                }
            ]
        }
    },
    methods: {
        chooseInspiration(inspiration) {
            store.setInspiration(inspiration);
            this.$router.push('/follower');
        }
    }
}
</script>