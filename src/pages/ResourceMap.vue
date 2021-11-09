<template>
    <div class="page green">
        <heading/>

        <!-- The map -->
        <span class="row" v-for="(row, rindex) in map" :key="rindex">
            <template v-for="(cell, cindex) in row" >
                <Cell
                    :key="cindex"
                    :cell="cell"
                    :selected="selected"
                    :rindex="rindex"
                    :cindex="cindex"
                    @select="select"
                />
            </template>
        </span>

        <!-- Details for a specific cell -->
        <CellDetails :selected="selected" />

        <div class="buttons">
            <img-btn src="svg/mountains.png" @click.native="$emit('changePage', 'Mountain')" label="Back to Hall" />
        </div>
    </div>
</template>

<script>
import CellDetails from './map/CellDetails.vue';
import Cell from './map/Cell.vue';
import mapStore from '@/store/map.js';

export default {
    components: { CellDetails, Cell },
    data() {
        return {
            selected: {}
        }
    },
    computed: {
        map: () => mapStore.map()
    },
    mounted() {
        this.select({rindex: 1, cindex: 2});
    },
    methods: {
        select({rindex, cindex}) {
            this.selected = {
                type: this.map[rindex][cindex],
                stones: mapStore.stones()[rindex][cindex],
                plants: mapStore.plants()[rindex][cindex],
                soil: mapStore.soil()[rindex][cindex],
                placename: mapStore.places()[rindex][cindex],
                rowIndex: rindex,
                cellIndex: cindex
            }
        }
    }
}
</script>
