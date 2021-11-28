<template>
    <div class="page green">
        <heading/>

        <span class="row" v-for="(row, rindex) in map" :key="rindex">
            <template v-for="(cell, cindex) in row" >
                <Cell
                    :key="cindex"
                    :cell="cell"
                    :selected="selected"
                    :rindex="rindex"
                    :cindex="cindex"
                    :showCharacter="true"
                    :movable="movable(rindex, cindex)"
                    :fog="fog[rindex][cindex] === 1"
                    @select="select"
                />
                
            </template>
        </span>

        <message>Moves left: {{ character.moves }}</message>

        <div class="buttons">
            <img-btn src="svg/mountains.png" @click.native="finish" label="Finish" />
        </div>
    </div>
</template>

<script>
import mapStore from '@/store/map.js';
import Cell from './map/Cell.vue';

export default {
    components: { Cell },
    data() {
        return {
            selected: {}
        }
    },
    mounted() {
        if (this.character.ci === -1) {
            const hall = mapStore.find(cell => cell.place === 'Hall');
            mapStore.moveCharacter(hall.r, hall.c);
        }
    },
    computed: {
        map: () => mapStore.map(),
        movableLocations: () => mapStore.movableLocations(),
        character: () => mapStore.character(),
        fog: () => mapStore.fog()
    },
    methods: {
        select({rindex, cindex}) {
            console.log(`select ${rindex}, ${cindex}`);
            if (this.movable(rindex, cindex) && this.character.moves > 0) {
                mapStore.moveCharacter(rindex, cindex);
            }
        },
        movable(ri, ci) {
            return this.character.moves > 0 && this.movableLocations.some(e => e.ri === ri && e.ci === ci);
        },
        finish() {
            this.$emit('changePage', 'Mountain');
        }
    }
}
</script>