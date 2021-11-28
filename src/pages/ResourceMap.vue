<template>
    <div class="page green">
        <heading/>

        <!-- The map -->
        <Grid :map="map">
            <template v-slot:default="{cell, rindex, cindex}">
                <Cell
                    :key="cindex"
                    :cell="cell"
                    :selected="selected"
                    :rindex="rindex"
                    :cindex="cindex"
                    :showResources="true"
                    :fog="fog[cell.truer][cell.truec] === 1"
                    @select="select"
                />
            </template>
        </Grid>

        <!-- Details for a specific cell -->
        <CellDetails :selected="selected" />

        <message>
            <Controls />
        </message>

        <div class="buttons">
            <img-btn src="svg/mountains.png" @click.native="$emit('changePage', 'Mountain')" label="Back to Hall" />
        </div>
    </div>
</template>

<script>
import CellDetails from './map/CellDetails.vue';
import Cell from './map/Cell.vue';
import mapStore from '@/store/map.js';
import Grid from './map/Grid.vue';
import Controls from './map/Controls.vue';
import mapviewport from '@/store/mapviewport.js';

export default {
    components: { CellDetails, Cell, Grid, Controls },
    data() {
        return {
            selected: {}
        }
    },
    computed: {
        map: () => mapStore.map(),
        fog: () => mapStore.fog()
    },
    mounted() {
        this.select({rindex: 1, cindex: 2});
        const hall = mapStore.find(cell => cell.place === 'Hall')
        mapviewport.start(hall.r, hall.c);
    },
    methods: {
        select({rindex, cindex}) {
            this.selected = {
                type: this.map[rindex][cindex],
                rowIndex: rindex,
                cellIndex: cindex
            }
        }
    }
}
</script>
