<template>
    <span :class="outerClass">
        <img v-if="fog" src="images/fog.PNG" class="cell" />
        <img v-else-if="cell.terrain === 'G'" src="svg/grass.png"  class="cell grass" />
        <img v-else-if="cell.terrain === 'F'" src="svg/trees.png" class="cell forest" />
        <img v-else-if="cell.terrain === 'H'" src="svg/hills.png" class="cell hill"/>
        <img v-else-if="cell.terrain === 'L'" src="svg/lake.png" class="cell lake"/>
        <img v-else-if="cell.terrain === 'M'" src="svg/mountains2.png" class="cell mountain" />
        <img v-else-if="cell.terrain === 'A'" src="svg/farm.png" class="cell farm" />
        <img v-else-if="cell.terrain === 'C'" src="svg/city.png" class="cell city" />

        <span
            :class="overlayClass"
            @click="$emit('select', {rindex, cindex})"
            
        >   
            <template v-if="showResources && !fog">
                <span v-if="cell.stones" class="sstone">
                    <img src="svg/stone.png" />
                </span>
                <span v-if="cell.plants" class="plants">
                    <img src="svg/herb.PNG" />
                </span>
                <span v-if="cell.soil" class="soil">
                    <img src="svg/farm.png" />
                </span>
                <span v-if="cell.activity" class="worker">
                    <img :src="'images/' + cell.disciple.image" />
                </span>
            </template>

            <span v-if="cell.place && !fog" class="placename">{{ cell.place }}</span>

            <img
                src="images/boss-1.PNG"
                class="character"
                v-if="showCharacter && character.ci === cindex && character.ri === rindex"
            />    
        </span>
    </span>
</template>

<script>
import mapStore from '@/store/map.js';

export default {
    props: [ 'cell', 'selected', 'rindex', 'cindex', 'showResources', 'showCharacter', 'movable', 'fog' ],
    computed: {
        activity: () => mapStore.activity(),
        // fog: () => mapStore.fog(),
        character: () => mapStore.character(),
        movableLocations: () => mapStore.movableLocations(),

        overlayClass() {
            return [
                'overlay',
                (this.selected && this.selected.rowIndex === this.rindex && this.selected.cellIndex === this.cindex) ? 'selected' : '',
                this.movable ? 'movable' : ''
            ];
        },
        outerClass() {
            return [
                'cell_outer',
                (this.cell.truer === 0 && this.rindex === 0) ? 'up' : '',
                (this.cell.truec === 0 && this.cindex === 0) ? 'left' : '',
                (this.cell.truer === mapStore.height() - 1) ? 'down' : '',
                (this.cell.truec === mapStore.width() - 1) ? 'right' : ''
            ]
        }
    }
}
</script>