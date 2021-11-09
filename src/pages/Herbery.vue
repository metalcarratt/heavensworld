<template>
    <div class="page green">
        <heading />
        <Herb v-for="(herb, index) in Object.keys(herbs)" :key="index" :herb="herb" :quantity="herbs[herb]" @click.native="selectedHerb=herb" />
        

        <div class="buttons">
            <img-btn src="svg/mountains.png" @click.native="$emit('changePage', 'Mountain')" label="Hall" />
        </div>

        <modal v-if="selectedHerb">
            <div class="herb-description">
                <label>{{ selectedHerb }}</label>
                <img :src="image(selectedHerb)" />
                <message>{{ description(selectedHerb) }}</message>
                <button @click="selectedHerb = ''">Close</button>
            </div>
        </modal>
    </div>
</template>

<script>
import store from '@/store/store.js';
import herbs from '@/heavensworld/herbs/herbs.js';
import Herb from '@/heavensworld/herbs/Herb.vue';

export default {
    components: { Herb },
    data() {
        return {
            selectedHerb: ""
        }
    },
    computed: {
        herbs() {
            return store.herbs();
        }
    },
    methods: {
        image(herb) {
            return herbs.getImage(herb);
        },
        description(herb) {
            return herbs.getDescription(herb);
        }
    }
}
</script>