<template>
    <span>
        <modal v-if="stage === 1">
            <h3>Send who to plant herbs?</h3>

            <DiscipleProfile 
                v-for="(disciple, index) of orderedDisciples"
                :key="index"
                :disciple="disciple"
                :hoverable="true"
                @click.native="chooseDisciple(disciple)"
            />

            <button @click="close">Cancel</button>
        </modal>

        <modal v-if="stage === 2">
            <h3>Plant what herbs?</h3>
            <Herb v-for="(herb, index) in herbs" :key="index" :herb="herb" :quantity="getHerb(herbs)" @click.native="chooseHerb(herb)" />
            <button @click="close">Cancel</button>
        </modal>
    </span>
</template>

<script>
import DiscipleProfile from '@/components/DiscipleProfile.vue';
import Herb from '@/heavensworld/herbs/Herb.vue';

import store from '@/store/store.js';
import working from '@/script/working.js';
import resources from '@/script/resources.js';

export default {
    props: [ 'row', 'cell' ],
    components: { DiscipleProfile, Herb },
    data() {
        return {
            stage: 1,
            chosenDisciple: {},
            orderedDisciples: []
        }
    },
    computed: {
        herbs: () => store.getHerbs(),
    },
    mounted() {
        this.orderDisciples();
    },
    methods: {
        orderDisciples() {
            this.orderedDisciples = store.orderedDisciples();
        },
        chooseDisciple(disciple) {
            this.chosenDisciple = disciple;
            this.stage = 2;
        },
        chooseHerb(herb) {
            working.startActivity(this.row, this.cell, this.chosenDisciple, resources.HERBS, herb);
            store.consumeHerb(herb);
            this.close();
        },
        getHerb(herb) {
            return store.getHerb(herb);
        },
        close() {
            this.$emit('close');
        }
    }
}
</script>